import React, { FC, useEffect, useState } from "react";
import Box from "./Box";
import { HintValueType } from "../lib/type";
import { initialHintValue } from "../data/initialState";

interface HintProps {
  id: number;
  answer: number | null;
  onSubmit: (value: HintValueType, id: number) => void;
}

const Hint: FC<HintProps> = ({ id, answer, onSubmit }) => {
  // logic
  const [value, setValue] = useState<HintValueType>(initialHintValue);
  const { left, right } = value;
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value, id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    answer !== null && setDisabled(true);
  }, [answer]);

  // view
  return (
    <form
      id={`hintForm${id}`}
      className="w-full text-white text-xl py-3"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center h-12 w-full">
        <input
          type="number"
          name="left"
          value={left}
          required={true}
          disabled={disabled}
          className="w-16 py-2 px-2 border border-white rounded-mb-lg bg-transparent disabled:bg-mb-gray-700 disabled:border-0"
          onChange={handleChange}
        />
        <div className="px-2">
          <Box />
        </div>
        <input
          type="text"
          name="right"
          value={right}
          required={true}
          disabled={disabled}
          className="w-16 py-2 px-2 border border-white rounded-mb-lg bg-transparent disabled:bg-mb-gray-700 disabled:border-0"
          onChange={handleChange}
        />
        <div className={disabled ? "" : "px-4"}>
          <button
            type="submit"
            form={`hintForm${id}`}
            disabled={disabled}
            className="w-12 p-3 bg-mb-blue-700 rounded-mb-lg disabled:bg-transparent"
          >
            =
          </button>
        </div>
        {/* START: 정답부분 */}
        {answer !== null && <span>{answer}</span>}
        {/* START: 정답부분 */}
      </div>
    </form>
  );
};

export default Hint;
