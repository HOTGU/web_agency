import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-full px-32">{children}</div>;
};

export default Container;
