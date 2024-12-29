import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user.email;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const quantity = form.quantity.value;

    const newEquipment = {
      name,
      email,
      photo,
      itemName,
      category,
      description,
      price,
      rating,
      customization,
      processing,
      quantity,
    };
    // console.log(name, email);

    // console.log(newEquipment);
    e.target.reset();
    fetch("https://sport-flex-server.vercel.app/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "COOL!",
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-cyan-900 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-4xl font-bold text-amber-500 text-center mb-6">
          Add New Equipment
        </h2>

        <form onSubmit={handleAddEquipment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              disabled
              type="text"
              placeholder={user && user.email ? `${user.email}` : `Your Email`}
              name="email"
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              disabled
              type="text"
              placeholder={
                user && user.email ? `${user.displayName}` : `Your Name`
              }
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              name="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              name="itemName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              placeholder="Enter category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              type="text"
              placeholder="0"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Rating (1-5)
            </label>
            <input
              type="text"
              placeholder="5.0"
              name="rating"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Customization
            </label>
            <input
              type="text"
              placeholder="Enter customization options"
              name="customization"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Processing Time (days)
            </label>
            <input
              type="text"
              placeholder="Enter Processing Time"
              name="processing"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Stock Quantity
            </label>
            <input
              type="text"
              placeholder="Enter Quantity Amount"
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-cyan-950 text-amber-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
