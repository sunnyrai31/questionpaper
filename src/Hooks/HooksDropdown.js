import { Fragment } from "react";
import { Link } from "react-router-dom";
const HooksDropdown = () => {
  return (
    <Fragment>
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
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
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
              custom hook- use state custom hooks example
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
    </Fragment>
  );
};
export default HooksDropdown;
