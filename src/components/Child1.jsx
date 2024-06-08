"use client";

const Child1 = ({ handleIncrement, increment }) => {
  return (
    <div>
      <button
        className=" bg-green-700 rounded-md p-4 text-white font-medium text-xl"
        onClick={() => handleIncrement(increment)}
      >
        Increment by 1000
      </button>
    </div>
  );
};

export default Child1;
