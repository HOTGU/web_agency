"use client";

import React from "react";
import LottiePlayer from "react-lottie-player";

interface ILottie {
  data: any;
  loop?: boolean;
  width?: number | string;
  height?: number | string;
}

const Lottie = ({
  data,
  loop = true,
  width = "100%",
  height = "100%",
}: ILottie) => {
  return (
    <LottiePlayer
      loop={loop}
      animationData={data}
      play
      style={{ width, height }}
    />
  );
};

export default Lottie;
