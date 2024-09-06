"use client";
import CountUp from "react-countup";

const AnimtedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," decimals={2} prefix="$" />
    </div>
  );
};

export default AnimtedCounter;
