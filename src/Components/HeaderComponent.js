import { Fragment } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* Interview Question Example dropdown starts here */}
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButtonDark"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/interviewQuestionSelectOnDemand"
                  >
                    Select opton on demand
                  </Link>
                  <Link className="dropdown-item" to="/interviewQuestionsQuiz">
                    Question quiz
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/interviewQuestionCounterApp"
                  >
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
            {/* Hooks example dropdown starts here */}
            <div className="dropdown m-2" data-bs-theme="dark">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButtonDark"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-title="this section contain - all the hooks with thier example"
              >
                Hooks Example
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButtonDark"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/hooksUsestate"
                    data-bs-toggle="tooltip"
                    data-bs-title="Disabled tooltip"
                  >
                    use state hooks example
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/hooksUseStateCustom"
                    data-bs-toggle="tooltip"
                    data-bs-title="Disabled tooltip"
                  >
                    use state custom hooks example
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/hooksUseEffect"
                    data-bs-toggle="tooltip"
                    data-bs-title="Disabled tooltip"
                  >
                    use Effect on counter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default HeaderComponent;
