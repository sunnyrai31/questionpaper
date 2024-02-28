import { useContext } from "react";
import UserNameContext from "./UserNameContext";
const UseContextChild2 = () => {
  const context = useContext(UserNameContext);
  return (
    <>
      <h1>{context.name}</h1>
      <h2>{context.lastName}</h2>
    </>
  );
};
export default UseContextChild2;
