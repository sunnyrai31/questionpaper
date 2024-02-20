import { Fragment } from "react";
import { Link } from "react-router-dom";
import { QuestionDropdown } from "../Question";
import { HooksDropdown } from "../Hooks";

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
            {/* TODO- Maybe Question and hooks dropdown can go to normal component hirarchy*/}
            {/* Interview Question Example dropdown starts here */}
            <QuestionDropdown></QuestionDropdown>
            {/* Hooks example dropdown starts here */}
            <HooksDropdown></HooksDropdown>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default HeaderComponent;
