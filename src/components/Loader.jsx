import React from "react";
import LottieLoader from "../assets/loader.gif";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={LottieLoader} alt="Loader" />
    </div>
  );
}
