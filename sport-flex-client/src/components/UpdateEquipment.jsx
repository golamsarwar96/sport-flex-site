import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { user } = useContext(AuthContext);
  const equipments = useLoaderData();
  // console.log(equipments);
  const {
    _id,
    itemName,
    category,
    description,
    price,
    quantity,
    customization,
    processing,
    photo,
    rating,
  } = equipments;

  const handleUpdateEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user.email;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const quantity = form.quantity.value;

    const updatedEquipment = {
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

    fetch(`https://sport-flex-server.vercel.app/equipments/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Updated Successfully",
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
          Update Equipment
        </h2>

        <form onSubmit={handleUpdateEquipment} className="space-y-4">
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
              placeholder={user && user.email ? `${photo}` : `Enter Image URL`}
              name="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Item Name</label>
            <input
              type="text"
              placeholder={
                user && user.email ? `${itemName}` : `Enter Item Name`
              }
              name="itemName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              placeholder={
                user && user.email ? `${category}` : `Enter Category`
              }
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder={
                user && user.email ? `${description}` : `Enter Description`
              }
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              type="text"
              placeholder={user && user.email ? `${price}` : `0`}
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
              placeholder={user && user.email ? `${rating}` : `5.0`}
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
              placeholder={
                user && user.email
                  ? `${customization}`
                  : `What's your customization preference?`
              }
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
              placeholder={
                user && user.email ? `${processing}` : `Enter Processing Time`
              }
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
              placeholder={user && user.email ? `${quantity}` : `Quantity`}
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-cyan-950 text-amber-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
