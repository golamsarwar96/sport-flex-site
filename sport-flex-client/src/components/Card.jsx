import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ equipment }) => {
  const { _id, itemName, category, photo, price, rating } = equipment || {};
  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl p-3 hover:shadow-2xl mb-10">
      <figure>
        <img
          className="w-[360px] h-[360px] object-cover rounded-xl"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="p-3 space-y-1">
        <h2 className="text-2xl font-bold text-center mb-2">{itemName}</h2>
        <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-[30%] text-white">
          {category}
        </p>
        <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-[45%] text-white">
          Price : ${price}
        </p>
        <p className="mx-auto flex items-center justify-center gap-2 text-center px-1 py-1 bg-cyan-950 w-[50%] text-white">
          Rating :<FaStar className="text-yellow-400"></FaStar>
          {rating}
        </p>
        <div className="card-actions flex justify-center">
          <Link to={`/${_id}`}>
            <button className="bg-amber-400 border-none  text-cyan-900  md:px-4 md:py-2 px-3 py-1 rounded-full mt-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
