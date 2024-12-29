require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i16dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    const userCollection = client.db("sportflexDB").collection("users");
    const equipmentCollection = client
      .db("sportflexDB")
      .collection("equipments");

    //Equipment Related API's
    //Equipment POST Method
    app.post("/equipments", async (req, res) => {
      const newEquipment = req.body;
      const result = await equipmentCollection.insertOne(newEquipment);
      res.send(result);
    });

    //Equipment GET Method
    app.get("/equipments", async (req, res) => {
      const cursor = equipmentCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //PUT method
    app.put("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedEquipment = req.body;
      const equipment = {
        $set: {
          photo: updatedEquipment.photo,
          itemName: updatedEquipment.itemName,
          category: updatedEquipment.category,
          description: updatedEquipment.description,
          price: updatedEquipment.price,
          rating: updatedEquipment.rating,
          customization: updatedEquipment.customization,
          processing: updatedEquipment.processing,
          quantity: updatedEquipment.quantity,
        },
      };

      const result = await equipmentCollection.updateOne(
        filter,
        equipment,
        options
      );
      res.send(result);
    });

    app.get("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.findOne(query);
      res.send(result);
    });

    //Delete Equipment
    app.delete("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.deleteOne(query);
      res.send(result);

      console.log(id);
    });

    //Only 6 data
    app.get("/equipmentslimited", async (req, res) => {
      const equipmentCollection = client
        .db("sportflexDB")
        .collection("equipments");
      const limitedData = await equipmentCollection.find({}).limit(6).toArray();
      res.send(limitedData);
    });

    //User related API's
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("Creating new user:", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //Updating the latest sign in time
    app.patch("/users", async (req, res) => {
      const email = req.body?.email;
      const filter = { email };
      const updatedDoc = {
        $set: {
          lastSignInTime: req.body?.lastSignInTime,
        },
      };

      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Sport Flex SERVER is running");
});

app.listen(port, () => {
  console.log(`Sport Flex is running on port: ${port}`);
});
