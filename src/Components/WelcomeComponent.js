import { Fragment } from "react";
import useStateCustom  from "../Hooks/useStateCustom";

const WelcomeComponent = () => {
  const [name, myName] = useStateCustom("sunny");
  return (
    <Fragment className="text-body text-bg-light">
      <h1>Welcome to Question Paper {name}</h1>
      <button
          className = 'btn btn-outline-primary'
        onClick={() => {
          myName("sunny rai");
        }}
      >Custom hook- use state </button>
    </Fragment>
  );
};
export default WelcomeComponent;
