// Here , i am going to show you, how to use forward ref.
/**
 * problem statement
 * have a parent and a child (maybe multiple child).
 * have a input in the child and on change of child. emit a callback.
 * handle the callback in parent, now change the color or any dom update in the child from the parent.
 *
 *
 * this is where forwardRef, is going to come.
 * why forward ref. because i want to to the DOM manipulation in the child from the parent.
 * otherwise callback was enough.
 *
 *
 * lets implement this.
 */

import {
  Fragment,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";

export const ParentComponent = () => {
  const clickBtnChildRef = useRef(null);
  const resetBtnChildRef = useRef(null);

  const handleChildComponentBtnClickCB = () => {
    if (clickBtnChildRef.current) {
      clickBtnChildRef.current.className = "btn btn-warning";
      clickBtnChildRef.current.focusOnInputFn();
    }
    if (resetBtnChildRef.current) {
      resetBtnChildRef.current.className = "btn btn-danger";
    }
  };

  const handleChildComponentResetCB = () => {
    if (resetBtnChildRef.current) {
      resetBtnChildRef.current.className = "btn btn-success";
      resetBtnChildRef.current.focusOnInputFn();
    }
    if (clickBtnChildRef.current) {
      clickBtnChildRef.current.className = "btn btn-primary";
    }
  };
  const handleCB = (reason) => {
    if (reason === "1") handleChildComponentBtnClickCB();
    else handleChildComponentResetCB();
  };
  const changeUserNameClickComponent = () => {
    if (clickBtnChildRef.current) {
      clickBtnChildRef.current.setUserName("sunny rai updated!");
    }
  };
  const changeUserPhoneClickComponent = () => {
    if (clickBtnChildRef.current) {
      clickBtnChildRef.current.setUserPhone(" number updated!");
    }
  };

  const changeUserNameResetComponent = () => {
    if (resetBtnChildRef.current) {
      resetBtnChildRef.current.setUserName(
        "sunny rai updated reseet component!"
      );
    }
  };
  const changeUserPhoneResetComponent = () => {
    if (resetBtnChildRef.current) {
      resetBtnChildRef.current.setUserPhone(" number updated reset component!");
    }
  };

  return (
    <Fragment>
      <h1> Hi, I am the parent Component</h1>
      <div>
        <label> chane props for click me component from parents</label>
        <button
          onClick={changeUserNameClickComponent}
          className="btn btn-warning m-2 "
        >
          change user name
        </button>
        <button
          onClick={changeUserPhoneClickComponent}
          className="btn btn-warning"
        >
          change user phone
        </button>
        <hr />
        <label> chane props for reset component from parents</label>
        <button
          onClick={changeUserNameResetComponent}
          className="btn btn-warning m-2 "
        >
          change user name
        </button>
        <button
          onClick={changeUserPhoneResetComponent}
          className="btn btn-warning"
        >
          change user phone
        </button>
      </div>

      <ChildComponent
        ref={clickBtnChildRef}
        btnClass="btn btn-primary"
        from="1"
        childComponentBtnClickCb={handleCB}
        title="Click me Component"
        btnText="Click me"
      >
        click me
      </ChildComponent>
      <ChildComponent
        ref={resetBtnChildRef}
        btnClass="btn btn-danger"
        from="2"
        childComponentBtnClickCb={handleCB}
        title="Reset all component"
        btnText="reset all"
      >
        reset
      </ChildComponent>
    </Fragment>
  );
};

export const ChildComponent = forwardRef((props, ref) => {
  const [userName, setUserName] = useState("sunny rai");
  const [userPhone, setUserPhone] = useState("9641485785");
  useEffect(() => {}, [ref, userName, userPhone]);

  const handleButtonClick = () => {
    props.childComponentBtnClickCb(props.from);
  };
  const changeUserNameCbFn = () => {
    return [userName, setUserName];
  };
  const changeUserPhoneCbFn = () => {
    return [userPhone, setUserPhone];
  };
  const _inputRef = useRef(null);
  const focusOnInputFn = () => {
    if (_inputRef.current) {
      _inputRef.current.focus();
    }
  };

  //here we are mentioning what we need to expose it to parent.
  useImperativeHandle(ref, () => ({
    handleButtonClick,
    changeUserNameCbFn,
    changeUserPhoneCbFn,
    userName,
    setUserName,
    userPhone,
    setUserPhone,
    focusOnInputFn,
  }));

  return (
    <Fragment>
      <h3> {props.title}</h3>
      <h4>user name : {userName}</h4>
      <h5>usert phone number : {userPhone}</h5>
      <button
        onClick={handleButtonClick}
        ref={ref}
        className={props.btnClass}
        key="primary-btn"
        id="primary-btn"
        title="click me will not work at this point of time because of useImperativeHandle might be causing issue. 
        \n so please avoid it. to make this work you need to remove the above functionality which changes the state of child, which is expose by useImperativeHandle."
      >
        {props.btnText}
      </button>
      <input
        type="text"
        value=""
        style={{ width: "300px" }}
        className="input-text m-2"
        placeholder="click on the button it will shift focus here"
      />
    </Fragment>
  );
});

const ForwardRefExample = () => {
  return (
    <Fragment>
      <ParentComponent></ParentComponent>
    </Fragment>
  );
};

export default ForwardRefExample;
