import React, { FC } from "react";
interface AnswerButtonProps {
  list: number[];
  isReset: boolean;
  result: "default" | "correct" | "inCorrect";
  onClick: (item: number) => void;
}

const AnswerButton: FC<AnswerButtonProps> = ({
  list,
  isReset,
  result,
  onClick,
}) => {
  return (
    <ul className="-mx-2 flex flex-wrap w-full">
      {list.map((item, index) => (
        <li key={index} className="p-2 w-1/2">
          <button
            type="button"
            className={`py-3 px-2 ${
              result === "default" || isReset
                ? "bg-mb-gray-700"
                : result === "correct"
                ? "bg-mb-blue-700"
                : "bg-mb-pink-700"
            } block text-center text-white rounded-mb-lg w-full`}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AnswerButton;
