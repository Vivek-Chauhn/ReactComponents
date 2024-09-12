import React, { useEffect, useState } from "react";

const Counter = () => {
  // Counter Component
  const Counter = ({ endValue, label, className }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startValue = 0;
      const duration = 3000; // Duration of the animation in milliseconds
      const increment = endValue / (duration / 20);

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(counter);
        }
        setCount(Math.ceil(startValue));
      }, 20);

      return () => clearInterval(counter);
    }, [endValue]);

    return (
      <div className={`text-center     ${className}`}>
        <div className="md:text-5xl text-lg font-bold text-white">{count}+</div>
        <div className="md:text-2xl text-lg text-white">{label}</div>
      </div>
    );
  };

  return (
    <>
      {/* <div className=" container"> */}
      <div className="text-center">
        <h1 className=" md:text-4xl  text-lg font-semibold">
          <span>Enhancing Business Experience</span>
          <span className="block">with Technology at Heart</span>
        </h1>
        <h2 className="mt-4 p-4">
          At Four Steps Digital, we infuse magic into innovation, crafting
          unique tech solutions that redefine your business identity and enhance
          life.
        </h2>
      </div>
      {/* Counter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-8 gap-4 cursor-pointer">
        <div className="col-span-1">
          <Counter
            endValue={1500}
            label="Happy Clients"
            className="bg-blue-500 border border-blue-200 rounded-lg p-5"
          />
        </div>

        <div className="col-span-1">
          <Counter
            endValue={200}
            label="Experts"
            className="bg-blue-500  border  rounded-lg p-5"
          />
        </div>
        <div className="col-span-1">
          <Counter
            endValue={200}
            label="Successful Projects"
            className="bg-blue-500  border  rounded-lg p-5"
          />
        </div>
        <div className="col-span-1">
          {/* <span>welcome buddy</span> */}
          <Counter
            endValue={6}
            label="Years of Experience"
            className="bg-blue-500 border rounded-lg p-5"
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Counter;
