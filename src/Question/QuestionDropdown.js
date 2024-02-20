import { Fragment } from "react";
import { Link } from "react-router-dom";

const QuestionDropdown = () => {
  return (
    <Fragment>
      <div className="dropdown m-2" data-bs-theme="dark">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButtonDark"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Interview Question
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
          <li>
            <Link className="dropdown-item" to="/SelectOnDemand">
              Select opton on demand
            </Link>
            <Link className="dropdown-item" to="/QuestionQuiz">
              Question quiz
            </Link>
            <Link className="dropdown-item" to="/UseState">
              Counter App
            </Link>
            <li>
              <Link
                className="dropdown-item"
                to="/hooksUseStateCustom"
                data-bs-toggle="tooltip"
                data-bs-title="Disabled tooltip"
              >
                use state hooks example
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default QuestionDropdown;
