import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);
  <Helmet>
    <title>SportFlex | Equipment</title>
  </Helmet>;
  const handleSort = () => {
    const sorted = [...equipments].sort((a, b) => b.price - a.price);
    setSortedEquipments(sorted);
  };

  return (
    <div className="overflow-x-auto my-10 p-4 m:p-0">
      <div className="flex justify-end">
        <button
          className="bg-cyan-950 text-white px-8 py-3 rounded-3xl"
          onClick={handleSort}
        >
          Sort By Price
        </button>
      </div>
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {sortedEquipments.map((equipment, index) => (
            <tr>
              <td>{equipment.itemName}</td>
              <td>{equipment.category}</td>
              <td>{equipment.price}</td>
              <Link to={`${equipment._id}`}>
                <button className="mt-[8px] bg-cyan-950 border-none  text-white  md:px-4 px-2 md:py-1 py-1 rounded-full">
                  View Details
                </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEquipment;
