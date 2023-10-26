import React, { FC } from "react";

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <>
      <p className="text-white text-3xl font-bold text-center">{mainTitle}</p>
      {subTitle && <p className="text-white text-center mt-1">{subTitle}</p>}
    </>
  );
};

export default Title;
