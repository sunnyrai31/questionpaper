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
    {
      text: "Infinite Scroll",
      to: "/InfinteScroll",
      title: "",
    },
    {
      text: "Contact Book ",
      to: "/ContactBook",
      title: "",
    },
    {
      text: "StartStop and print ",
      to: "/StartStop",
      title: "",
    },
    {
      text: "Design Grid Layout ",
      to: "/GridLayout",
      title: "",
    },
    {
      text: "Design Flex Layout ",
      to: "/FlexLayout",
      title: "",
    },
    {
      text: "lazy loading on demand (New Fold Digital) ",
      to: "/NewFold",
      title: "",
    },
    {
      text: "Search bar implementation",
      to: "/Search",
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
