import { Fragment, useEffect, useRef, useState } from "react";

const StartStop = () => {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef(null);
  const [isstarted, setcounterStarted] = useState(false);
  const [isPaused, setPause] = useState(false);
  const limit = 150;

  const handleStartCounter = () => {
    setcounterStarted(true);
  };
  useEffect(() => {
    if (isstarted) {
      intervalId.current = setTimeout(() => {
        console.log("count", counter);
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  }, [isstarted, counter]);
  const handleResetCounter = () => {
    setCounter(0);
    clearInterval(intervalId.current);
    setcounterStarted(false);
  };

  const handlePauseCounter = () => {
    setPause(true);
    const currentCount = counter;
    clearInterval(intervalId.current);
    setCounter(currentCount);
  };

  const handleResumeCounter = () => {
    setcounterStarted(true);
    setPause(false);
    const _counterStopedAt = counter;
    setCounter(_counterStopedAt);
    handleStartCounter();
  };
  useEffect(() => {
    if (counter === limit + 1) {
      handleResetCounter();
    }
  }, [counter]);

  useEffect(() => {
    handleStartCounter();
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <Fragment>
      <h1>Start stop counter</h1>
      <h2>{counter}</h2>
      {!isstarted ? (
        <button className="btn btn-primary m-2" onClick={handleStartCounter}>
          start
        </button>
      ) : !isPaused ? (
        <button className="btn btn-primary m-2" onClick={handlePauseCounter}>
          pause
        </button>
      ) : (
        <button className="btn btn-primary m-2" onClick={handleResumeCounter}>
          Resume
        </button>
      )}

      <button className="btn btn-danger m-2" onClick={handleResetCounter}>
        reset
      </button>
    </Fragment>
  );
};
export default StartStop;

/***
 *
 * {
 * prev: current-1;
 * current: current
 * }
 *
 */
