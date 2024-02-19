import { Fragment } from "react";

import { AboutMsg } from "../Data/aboutMessage";
const AboutComponent = () => {
  return (
    <Fragment>
      <span>
        <label>{AboutMsg}</label>
      </span>
    </Fragment>
  );
};
export default AboutComponent;
