import { Fragment } from "react";
import WelcomeComponent from "./Components/WelcomeComponent";
import AboutComponent from "./Components/AboutComponent";
import { SelectOnDemand, QuestionQuiz } from "./Question";
import {
  UseStateHook,
  UseEffectHook,
  UseStateCustomHook,
  UseRefHook,
} from "./Hooks";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  const routingDetails = [
    { path: "/", componentName: WelcomeComponent },
    { path: "/about", componentName: AboutComponent },
    { path: "/QuestionQuiz", componentName: QuestionQuiz },
    { path: "/SelectOnDemand", componentName: SelectOnDemand },
    { path: "/UseState", componentName: UseStateHook },
    { path: "/hooksUsestate", componentName: UseStateHook },
    { path: "/hooksUseEffect", componentName: UseEffectHook },
    { path: "/hooksUseStateCustom", componentName: UseStateCustomHook },
    { path: "/hooksUseRef", componentName: UseRefHook },
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
