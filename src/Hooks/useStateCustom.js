import { Fragment, useState } from "react";
/**
 * Its custom hook - which is internally using useState hook
 * @param {*} intialValue
 * @returns
 */
const UseStateCustomHook = (intialValue) => {
  const [state, setState] = useState(intialValue);
  return [state, setState];
};
const UseStateCustomHookComponent = () => {
  const [name, setName] = UseStateCustomHook("sunny");
  return (
    <Fragment>
      <h1>Welcome to Question Paper {name}</h1>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setName("sunny rai");
        }}
      >
        Custom hook- use state
      </button>
    </Fragment>
  );
};
export default UseStateCustomHookComponent;
