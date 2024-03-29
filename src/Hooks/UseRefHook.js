import { Fragment, useRef } from "react";

const UseRefHook = () => {
  const _ref = useRef(null);
  const handleButtonClick = () => {
    console.log(_ref);
    _ref.current.placeholder = "focus came here";
    _ref.current.focus();
  };
  return (
    <Fragment>
      <input
        type="text"
        ref={_ref}
        style={{ width: "300px" }}
        className="input-text m-2"
        placeholder="click on the button to see focus here"
      />
      <button className="btn btn-primary m-2" onClick={handleButtonClick}>
        focus input
      </button>
    </Fragment>
  );
};
export default UseRefHook;
