import comp1 from "../assets/comp1.png";
import comp2 from "../assets/comp2.png";
import comp3 from "../assets/comp3.png";
import comp4 from "../assets/comp4.png";
const Company = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">
        We Are <span className="text-amber-500">Partnered</span> With The Best
      </h1>
      <div className="flex gap-4 items-center justify-center md:flex-row flex-col mb-10">
        <div>
          <img
            className="w-[240px] h-[200px] object-cover"
            src={comp1}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[210px] object-contain"
            src={comp2}
            alt=""
          />
        </div>
        <div className="md:ml-12">
          <img
            className="w-[200px] h-[180px] object-contain"
            src={comp3}
            alt=""
          />
        </div>
        <div className="md:ml-8">
          <img
            className="md:w-[230px] md:h-[190px] h-[150px] md:object-contain"
            src={comp4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
