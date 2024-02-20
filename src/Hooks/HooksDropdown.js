import { Fragment } from "react";
import { Link } from "react-router-dom";
const HooksDropdown = () => {
  const hooksDropDownList = [
    { text: "use state hooks example", to: "/hooksUsestate", title: "" },
    {
      text: "custom hook- use state custom hooks example",
      to: "/hooksUseStateCustom",
      title: "",
    },
    { text: "use Effect on counter", to: "/hooksUseEffect", title: "" },
  ];
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
          {hooksDropDownList.map((listItem, index) => {
            return (
              <li key={`hooks-item-${index}`}>
                <Link
                  key={`hooks-item-link-${index}`}
                  className="dropdown-item"
                  to={listItem.to}
                  data-bs-toggle="tooltip"
                  data-bs-title={listItem.title}
                >
                  {listItem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
export default HooksDropdown;
