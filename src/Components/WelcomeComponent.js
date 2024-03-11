import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../Store/userSlice";
const WelcomeComponent = () => {
  const userName = useSelector((state) => {
    console.log("state", state);
    return state.user.firstName;
  });
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(changeName("user name changed from component"));
  };

  // implementing the store now. in above mentioed code.
  return (
    <Fragment>
      <h1> Welcome to Home Page</h1>
      <h5>user name from store:::::: {userName}</h5>
      <label>click here to change the state</label>
      <button onClick={onClickHandler} className="btn btn-primary">
        click me
      </button>
    </Fragment>
  );
};
export default WelcomeComponent;
