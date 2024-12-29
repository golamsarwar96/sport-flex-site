import { Link } from "react-router-dom";
import img1 from "../assets/blogImage2.png";
import img2 from "../assets/blogImage3.png";
import img3 from "../assets/blogImg1.png";

const Blog = () => {
  return (
    <div className="mt-10 mb-28">
      <h1 className="text-center text-5xl">
        Latest <span className="text-amber-500">Blogs</span>
      </h1>
      <p className="text-center text-xl mt-3 mb-4">
        <span className="text-amber-500">Find Out More About Sports</span>
      </p>
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="p-5 rounded-lg bg-base-100 shadow-lg hover:shadow-2xl">
          <img className="w-[1400px]" src={img1} alt="" />
          <h2 className="mt-3 text-xl">
            Football Training Drills to Enhance Skills
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore the best football drills for passing, shooting, and agility
            to elevate your game..
            <Link className="text-blue-700">Read More</Link>
          </p>
        </div>

        <div className="p-5 rounded-lg bg-base-100 shadow-lg hover:shadow-2xl">
          <img className="w-[1400px]" src={img2} alt="" />
          <h2 className="mt-3 text-xl">How to Choose the Best Tennis Gear</h2>
          <p className="mt-2 text-sm text-gray-600">
            Learn how to select the perfect racket, shoes, and accessories for
            your tennis game...
            <Link className="text-blue-700">Read More</Link>
          </p>
        </div>

        <div className="p-5 rounded-lg bg-base-100 shadow-lg hover:shadow-2xl">
          <img className="w-[1400px]" src={img3} alt="" />
          <h2 className="mt-3 text-xl">
            Top Cricket Batting Tips for Beginners
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Learn essential cricket batting techniques to improve performance
            and build confidence on the pitch..
            <Link className="text-blue-700">Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
