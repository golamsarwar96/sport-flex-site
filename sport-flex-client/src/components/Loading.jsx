import Lottie from "lottie-react";
import footballIcon from "../assets/football_loading.json";
const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      {/* <span className="loading loading-infinity loading-lg"></span> */}
      <div>
        <Lottie
          animationData={footballIcon}
          style={{ width: "300px", height: "300px" }}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default Loading;
