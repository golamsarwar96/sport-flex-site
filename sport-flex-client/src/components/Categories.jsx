import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16 md:w-[50%] mx-auto">
        Visit Different Sport Equipment{" "}
        <span className="text-amber-500 text-center text-5xl">Categories</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-center p-10 lg:gap-32 gap-10 md:my-6">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-amber-500 border-none  text-cyan-950  md:px-10 md:py-4 px-3 py-1 rounded-full"
                : "bg-cyan-950 border-none  text-white  md:px-10 md:py-4 px-3 py-1 rounded-full"
            }
            key={category.category}
            to={`/category/${category.category}`}
          >
            <button className="md:px-5 md:py-2 py-4">
              {category.category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
