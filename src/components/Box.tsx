import React, { FC } from "react";

interface BoxProps {
  size?: "small" | "big";
  type?: "default" | "current" | "hint" | "complete";
}

const Box: FC<BoxProps> = ({ size = "small", type = "default" }) => {
  return (
    <div className="px-2">
      <div className={`${size === "small" ? "w-10" : "w-32"} mx-auto`}>
        <img
          src={`/images/box${type === "default" ? "" : `_${type}`}.svg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Box;
