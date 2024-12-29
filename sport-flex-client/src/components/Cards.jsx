import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  //To get the category
  const { category } = useParams();
  const [equipments, setEquipments] = useState([]);
  //Filtering Cards By Category And Showing All Cards When Default.
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (equipment) => equipment.category === category
      );
      setEquipments(filteredByCategory);
    } else {
      setEquipments(data);
    }
  }, [category, data]);
  // console.log(equipments);
  return (
    <div>
      <h1 className="text-5xl">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mb-20">
        {equipments.map((equipment, index) => (
          <Card key={index} equipment={equipment}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
