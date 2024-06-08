"use client";
import Child1 from "@/components/Child1";
import Child2 from "@/components/Child2";
import dynamic from "next/dynamic";
import { useState } from "react";
const ColorPlate = dynamic(() => import("@/components/ColorPlate"), {
  ssr: false,
});

export default function Parent() {
  const [money, setMoney] = useState(0);

  // handle increment by 1000
  const handleIncrement = (amount) => {
    setMoney((preValue) => preValue + amount);
  };

  // handle decrement by 500
  const handleDecrement = (amount) => {
    if (money < amount) {
      alert(`${money} Can't Be Negative Number`);
      return money;
    }
    setMoney((preValue) => preValue - amount);
  };

  return (
    <div className="mx-4">
      <div className="w-full max-w-[1000px]  flex justify-center items-center">
        <div className="">
          <h2 className="mt-3 mb-6 text-3xl font-bold text-green-400 ">
            See Status
          </h2>
          <div>
            <div className="flex items-center justify-center w-full gap-4 mb-6">
              <span className="flex justify-between w-full py-3 text-2xl font-semibold text-center rounded-sm text-whit bg-orang-400">
                Current Money: {money}
              </span>
            </div>
          </div>

          <div className="flex gap-10">
            <Child1 increment={1000} handleIncrement={handleIncrement} />
            <Child2 decrement={500} handleDecrement={handleDecrement} />
          </div>
        </div>
      </div>
      <ColorPlate />
    </div>
  );
}
