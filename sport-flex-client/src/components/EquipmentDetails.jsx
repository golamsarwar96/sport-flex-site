import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EquipmentDetails = () => {
  const equipmentData = useLoaderData();

  const { id } = useParams();
  const [equipments, setEquipments] = useState({});

  useEffect(() => {
    const singleData = equipmentData.find((equipment) => equipment._id === id);
    setEquipments(singleData);
  }, [equipmentData, id]);
  return (
    <div className="bg-cyan-900 min-h-screen flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={equipments.photo}
          className=" w-[370px] h-[450px] object-cover rounded-lg shadow-2xl"
        />
        <div className="space-y-2 text-white md:w-[50%]">
          <h1 className="text-5xl font-bold text-center md:text-left">
            {equipments.itemName}
          </h1>
          <p className="text-sm text-center md:text-left">
            {equipments.description}
          </p>
          <p className="text-2xl text-center md:text-left">
            Cateogry : {equipments.category}
          </p>
          <p className="text-xl text-center md:text-left">
            Price : ${equipments.price}
          </p>
          <p className="text-center md:text-left">
            Customization : {equipments.customization}
          </p>
          <p className="text-center md:text-left">
            Quantity : {equipments.quantity}
          </p>
          <p className="text-center md:text-left">
            Processing Time : {equipments.processing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
