import slide1 from "../assets/largest-sports-equipment-companies.jpg.png";
import slide2 from "../assets/Fotolia_4437974_sport.png";
import slide3 from "../assets/sports-tools.png";
const Banner = () => {
  return (
    <div className="carousel w-full z-0">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slide3} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
        <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-60 text-center bg-amber-400 text-black p-5">
          Buy The Best Sports Equipment In Few Simple Clicks
        </h1>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slide2} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
        <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-60 text-center bg-amber-400 text-black p-5">
          Create Account And Make Your Own Equipment List
        </h1>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slide1} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="bg-cyan-950 text-white border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
        <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-60 text-center bg-amber-400 text-black p-5">
          Buy All Kinds Of Sports Accessories In Affordable Price
        </h1>
      </div>
    </div>
  );
};

export default Banner;
