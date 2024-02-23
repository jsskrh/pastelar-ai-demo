import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="gap-x-2 flex items-center">
      <div className="flex flex-col">
        <CiPlay1
          className="-rotate-90 cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}
        />
        <CiPlay1
          className="rotate-90 cursor-pointer"
          onClick={() => count > 0 && setCount((prev) => prev - 1)}
        />
      </div>
      <span className="select-none cursor-default">{count}</span>
    </div>
  );
};

export default Counter;
