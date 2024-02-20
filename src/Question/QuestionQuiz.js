import react, { Fragment, useEffect, useRef, useState } from "react";

const QuestionList = () => {
  const QuestionListArr = [
    {
      text: "world fasted animal ?",
      options: ["Chitah", "falcon"],
      correctans: "falcon",
    },
    {
      text: "World largest animal ?",
      options: ["Jiraf", "elephant", "whale"],
      correctans: "whale",
    },
    {
      text: "World fasted bike ?",
      options: ["BMW", "Kawasaki H2R"],
      correctans: "Kawasaki H2R",
    },
  ];
  const [selectedAns, setSelectedAns] = useState(
    new Array(QuestionListArr.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(120);
  const [timerId, setTimerId] = useState(0);

  const handleOptionChange = (index, value) => {
    const newSelectedAnswers = [...selectedAns];
    newSelectedAnswers[index] = value;
    setSelectedAns(newSelectedAnswers);
  };
  const calculateScore = (e) => {
    setShowResult(true);
    e.preventDefault();
    QuestionListArr.map((question, index) => {
      if (question.correctans === selectedAns[index]) {
        setScore((prevScore) => prevScore + 1);
      }
    });
  };

  const resetForm = () => {
    setSelectedAns(new Array(QuestionListArr.length).fill(null));
    setScore(0);
    setShowResult(false);
    setTimer(120);
  };

  const prepareQuestionList = () => {
    const styleClasName = {
      pass: "green",
      fail: "red",
    };
    return (
      <Fragment className="d-flex card ">
        <h1> Question Quiz!</h1>
        <h4>timer : {timer}</h4>
        <Fragment>
          {showResult && (
            <h2
              style={{
                color: score >= 2 ? styleClasName.pass : styleClasName.fail,
              }}
            >
              {" "}
              your result is {score}/{QuestionListArr.length}
            </h2>
          )}
        </Fragment>

        {QuestionListArr.map((questions, index) => {
          return (
            <div key={`div-${index}`}>
              <span key={`span-${index}`}>
                <h2 key={`span-${index}`}>
                  {" "}
                  {index + 1}. {questions.text}{" "}
                </h2>
                {questions.options.map((item) => {
                  return (
                    <Fragment key={`fragment-${index}`}>
                      {/* <input class="form-check-input" type="radio" name="radioGroup" id="option1" value="option1">
    <label class="form-check-label" for="option1"></label> */}
                      <input
                        className="form-check-input"
                        type="radio"
                        key={`question${index}-${item}`}
                        name={`question${index}-${item}`}
                        value={item}
                        id={`question${index}-${item}`}
                        checked={selectedAns[index] === item}
                        onChange={() => handleOptionChange(index, item)}
                      />
                      <label
                        className="form-check-label"
                        for={`question${index}-${item}`}
                      >
                        {item}
                      </label>
                    </Fragment>
                  );
                })}
              </span>
            </div>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          calculateScore(e);
        }}
        onReset={() => {
          resetForm();
        }}
      >
        {prepareQuestionList()}
        <Fragment>
          <button
            type="submit"
            className="btn btn-primary m-2"
            disabled={showResult}
          >
            Submit
          </button>
          <button type="reset" className="btn btn-secondary m-2">
            Reset
          </button>
        </Fragment>
      </form>
    </Fragment>
  );
};
export default QuestionList;
