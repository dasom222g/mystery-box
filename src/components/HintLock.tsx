import React, { FC } from "react";

interface HintLockProps {
  disabled?: boolean;
  onClick: () => void;
}

const HintLock: FC<HintLockProps> = ({ disabled = false, onClick }) => {
  return (
    <button
      type="button"
      className="w-full py-2 border border-white rounded-mb-lg disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}
    >
      <img src="/images/lock.svg" alt="lock" className="mx-auto" />
      <span className="sr-only">hint open</span>
    </button>
  );
};

export default HintLock;
