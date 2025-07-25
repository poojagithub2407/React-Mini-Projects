import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border max-w-2xl py-12 my-12 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-bold py-4">{count}</p>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={increment}
          >
            Increment +
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={decrement}
          >
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
