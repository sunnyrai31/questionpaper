import { Fragment, useEffect, useState } from "react";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);
  const [counterEffect, setCounterEffect] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => {
    setCounter(counter + 1);
  };
  const handleToggleClick = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setCounterEffect(counter);
  }, [toggle]);

  return (
    <Fragment>
      <legend>Example of use effect hooks</legend>
      <small>
        in this example : counter effect value update is depend upon the
        showEffect button flag, that is dependecy array for useEffect
      </small>
      <p>
        <label>counter {counter}</label>
      </p>
      <p>
        <label>counter Effect {counterEffect}</label>
      </p>
      <span>
        <button onClick={handleToggleClick} ß className="btn btn-primary">
          {!toggle ? "showEffect" : "re-render"}
        </button>
        <button className="btn btn-primary m-2" onClick={handleButtonClick}>
          {" "}
          Increment{" "}
        </button>
      </span>
    </Fragment>
  );
};
export default UseEffectHook;
