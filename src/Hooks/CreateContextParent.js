import { Fragment } from "react";
import UserNameContext from "./UserNameContext";
import UseContextChild from "./UseContextChild";
import UseContextChild2 from "./UseContextChild2";
const CreateContextParent = () => {
  return (
    <Fragment>
      <UserNameContext.Provider
        value={{ name: "Child compoenent1", lastName: "hello" }}
      >
        <UseContextChild></UseContextChild>
      </UserNameContext.Provider>

      <UserNameContext.Provider
        value={{ name: "Child Component 2", lastName: "hello" }}
      >
        <UseContextChild2></UseContextChild2>
      </UserNameContext.Provider>
    </Fragment>
  );
};

export default CreateContextParent;
