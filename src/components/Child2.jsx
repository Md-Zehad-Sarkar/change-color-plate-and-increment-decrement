"use client";

const Child2 = ({ handleDecrement, decrement }) => {
  return (
    <div>
      <button
        className=" bg-red-500 rounded-md p-4 text-white font-medium text-xl"
        onClick={() => handleDecrement(decrement)}
      >
        Decrement by 500
      </button>
    </div>
  );
};

export default Child2;
