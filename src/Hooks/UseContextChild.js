import { Fragment, useContext } from "react";
import UserNameContext from "./UserNameContext";
const UseContextChild = () => {
  const context = useContext(UserNameContext);
  return (
    <Fragment>
      <h1>{context.name}</h1>
      <h2>{context.lastName}</h2>
    </Fragment>
  );
};
export default UseContextChild;
