import { Fragment } from "react";
import { Link } from "react-router-dom";

const QuestionDropdown = () => {
  const QuestionDropDownList = [
    { text: "Select opton on demand", to: "/SelectOnDemand", title: "" },
    {
      text: "Question quiz",
      to: "/QuestionQuiz",
      title: "",
    },
    { text: "Counter App", to: "/UseState", title: "" },
    { text: "use state hooks example", to: "hooksUseStateCustom", title: "" },
    {
      text: "Delete list item on demand",
      to: "/QuestionDeleteItem",
      title: "",
    },
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
        >
          Interview Question
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
          {QuestionDropDownList.map((listItem, index) => {
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
export default QuestionDropdown;
