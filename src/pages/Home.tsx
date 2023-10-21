import React from "react";
import Button from "../components/Button";
import Box from "../components/Box";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // logic
  const history = useNavigate();

  const goQuiz = () => {
    history("/quiz");
  };

  // view
  return (
    <div className="h-full flex">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Box size="big" />
        <h2 className="text-2xl font-bold text-white text-center py-10">
          Mystery Box
        </h2>
      </div>
      <div className="mt-auto w-full">
        <Button text="Play Now" color="bg-mb-pink-700" onClick={goQuiz} />
      </div>
    </div>
  );
};

export default Home;
