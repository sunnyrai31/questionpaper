import { Fragment, useState } from "react";
const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const handleButtonClick = (type) => {
    type === "Add" ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  return (
    <Fragment>
      <span>counter : {counter}</span>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleButtonClick("Add")}
      >
        Increment counter
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleButtonClick("Remove")}
      >
        Decrement counter
      </button>
    </Fragment>
  );
};
export default UseStateHook;
