/***
 * what is progress bar, how to implement it
 * something which shows that progress maybe in percentage that have some color's whihc tell its progress so far.
 * so basically its a div where will show the progress gradualy (10%, 20%, 30% something like that)
 *
 */

import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { Fragment, useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  let timerId;

  const increaseProgressBar = () => {
    timerId = setTimeout(() => {
      setWidth((prev) => {
        return (Math.round(prev + 1) / 100) * 100;
      });
    }, 400);
  };
  const resetProgressBar = () => {
    setWidth(0);
    clearTimeout(timerId);
  };

  useEffect(() => {
    console.log(width);
    if (width < 100) {
      increaseProgressBar();
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [width, timerId]);

  return (
    <Fragment>
      <h3> Example of progress bar</h3>
      <label> Progress bar will start automatically on load of the page</label>
      <hr />
      <div
        style={{
          height: "50px",
          width: "calc(100% - 10px)",
          backgroundColor: "#fcfffa",
          overflow: "hidden",
        }}
      >
        <div
          className="progress-bar"
          style={{
            height: "20px",
            width: `${width}%`,
            backgroundColor: "green" || "#4caf50",
            transition: "width 0.3s ease-in-out",
            margin: "10px",
          }}
        >
          {width}%
        </div>
      </div>
      <button onClick={resetProgressBar} className="btn btn-danger m-2">
        re-start
      </button>
    </Fragment>
  );
};
export default ProgressBar;
