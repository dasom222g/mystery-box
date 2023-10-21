import React from "react";

const AnswerButtonList = () => {
  return (
    <ul className="-mx-2 flex flex-wrap">
      <li className="p-2 w-1/2">
        <button
          type="button"
          className="py-3 px-2 bg-mb-gray-700 block text-center text-white rounded-mb-lg w-full"
        >
          11
        </button>
      </li>
      <li className="p-2 w-1/2">
        <button
          type="button"
          className="py-3 px-2 bg-mb-gray-700 block text-center text-white rounded-mb-lg w-full"
        >
          11
        </button>
      </li>
      <li className="p-2 w-1/2">
        <button
          type="button"
          className="py-3 px-2 block text-center text-white rounded-mb-lg w-full relative bg-mb-blue-700"
        >
          {/* 정답 체크 */}
          <div className="w-6 h-6 absolute -left-1 -top-3">
            <img
              src="/images/icon-correct.svg"
              className="block w-full"
              alt="correct"
            />
            {/* <img
              src="/images/icon-incorrect.svg"
              className="block w-full"
              alt="correct"
            /> */}
          </div>
          {/* 정답 체크 */}
          11
        </button>
      </li>
      <li className="p-2 w-1/2">
        <button
          type="button"
          className="py-3 px-2 bg-mb-gray-700 block text-center text-white rounded-mb-lg w-full"
        >
          11
        </button>
      </li>
    </ul>
  );
};

export default AnswerButtonList;
