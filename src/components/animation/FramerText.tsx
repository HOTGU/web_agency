"use client";

import React from "react";
import { motion } from "framer-motion";

interface IFramerText {
  text: string;
  type?: "default" | "title" | "subTitle";
}

const FramerText = ({ text, type = "default" }: IFramerText) => {
  return (
    <>
      {text.split("").map((item, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index / 10 }}
          className={`${
            type === "title" && "text-5xl font-bold tracking-wide"
          }`}
        >
          {item}
        </motion.span>
      ))}
    </>
  );
};

export default FramerText;
