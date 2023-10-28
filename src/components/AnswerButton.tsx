import React, { FC } from "react";
import { CorrectResultType } from "../lib/type";
interface AnswerButtonProps {
  list: number[];
  result: CorrectResultType | null;
  onClick: (item: number) => void;
}

const AnswerButton: FC<AnswerButtonProps> = ({ list, result, onClick }) => {
  // logic

  // view
  return (
    <ul className="-mx-2 flex flex-wrap w-full">
      {list.map((item, index) => (
        <li key={index} className="p-2 w-1/2">
          <button
            type="button"
            className={`py-3 px-2 ${
              result
                ? result.selectedItem === item
                  ? result.state === "correct"
                    ? "bg-mb-blue-700"
                    : "bg-mb-pink-700"
                  : "bg-mb-gray-700"
                : "bg-mb-gray-700"
            } block text-center text-white rounded-mb-lg w-full relative`}
            onClick={() => onClick(item)}
          >
            <i
              className={`block w-6 h-6 absolute bg-contain bg-no-repeat -top-2 -left-1 bg-correct opacity-0 ${
                result &&
                item === result.selectedItem &&
                result.state === "correct"
                  ? `opacity-100`
                  : ""
              }`}
            />
            <i
              className={`block w-6 h-6 absolute bg-contain bg-no-repeat -top-2 -left-1 bg-inCorrect opacity-0 ${
                result &&
                item === result.selectedItem &&
                result.state === "inCorrect"
                  ? `opacity-100`
                  : ""
              }`}
            />
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AnswerButton;
