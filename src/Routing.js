import { Fragment } from "react";
import WelcomeComponent from "./Components/WelcomeComponent";
import AboutComponent from "./Components/AboutComponent";
import {
  SelectOnDemand,
  QuestionQuiz,
  QuestionDeleteItem,
  InfinteScroll,
  ContactBook,
  StartStop,
  GridLayout,
  FlexLayout,
  NewFold,
  Search,
  ProgressBar,
  CommentWidget,
} from "./Question";
import {
  UseStateHook,
  UseEffectHook,
  UseStateCustomHook,
  UseRefHook,
  UseMemoHook,
  CreateContextParent,
  ForwardRefExample,
} from "./Hooks";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  const routingDetails = [
    { path: "/", componentName: WelcomeComponent },
    { path: "/about", componentName: AboutComponent },
    { path: "/QuestionDeleteItem", componentName: QuestionDeleteItem },
    { path: "/QuestionQuiz", componentName: QuestionQuiz },
    { path: "/StartStop", componentName: StartStop },
    { path: "/InfinteScroll", componentName: InfinteScroll },
    { path: "GridLayout", componentName: GridLayout },
    { path: "/NewFold", componentName: NewFold },
    { path: "FlexLayout", componentName: FlexLayout },
    { path: "/ContactBook", componentName: ContactBook },
    { path: "/SelectOnDemand", componentName: SelectOnDemand },
    { path: "/UseState", componentName: UseStateHook },
    { path: "/hooksUsestate", componentName: UseStateHook },
    { path: "/hooksUseEffect", componentName: UseEffectHook },
    { path: "/hooksUseStateCustom", componentName: UseStateCustomHook },
    { path: "/hooksUseRef", componentName: UseRefHook },
    { path: "/hooksUseMemo", componentName: UseMemoHook },
    { path: "/hooksContext", componentName: CreateContextParent },
    { path: "/ForwardRefExample", componentName: ForwardRefExample },
    { path: "/Search", componentName: Search },
    { path: "/ProgressBar", componentName: ProgressBar },
    { path: "/CommentWidget", componentName: CommentWidget },
  ];
  return (
    <Fragment>
      <Routes>
        {routingDetails.map((routingDetail, index) => {
          return (
            <Route
              key={`Routing-${routingDetail.componentName}`}
              path={routingDetail.path}
              element={<routingDetail.componentName />}
            ></Route>
          );
        })}
      </Routes>
    </Fragment>
  );
};
export default Routing;
