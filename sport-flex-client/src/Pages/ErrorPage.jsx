import React from "react";
import errorIcon from "../assets/404.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      {/* <span className="loading loading-infinity loading-lg"></span> */}
      <div>
        <Lottie
          animationData={errorIcon}
          style={{ width: "1000px", height: "500px" }}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
