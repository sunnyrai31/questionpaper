import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import WelcomeComponent from "./Components/WelcomeComponent";
import { SelectOnDemand, QuestionQuiz } from "./Question";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutComponent from "./Components/AboutComponent";
import {
  UseStateHookExample,
  UseEffectHook,
  UseStateCustomHookComponent,
} from "./Hooks";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // document.title = process.env.REACT_APP_TITLE;
  }, []);
  return (
    <Router>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route
            path="/QuestionQuiz"
            element={<QuestionQuiz></QuestionQuiz>}
          ></Route>
          <Route
            path="/about"
            element={<AboutComponent></AboutComponent>}
          ></Route>
          <Route
            path="/"
            element={<WelcomeComponent></WelcomeComponent>}
          ></Route>
          <Route
            path="/SelectOnDemand"
            element={<SelectOnDemand></SelectOnDemand>}
          ></Route>
          <Route
            path="/interviewQuestionCounterApp"
            element={<UseStateHookExample></UseStateHookExample>}
          ></Route>
          <Route
            path="/hooksUsestate"
            element={<UseStateHookExample></UseStateHookExample>}
          ></Route>
          <Route
            path="/hooksUseEffect"
            element={<UseEffectHook></UseEffectHook>}
          ></Route>
          <Route
            path="/hooksUseStateCustom"
            element={
              <UseStateCustomHookComponent></UseStateCustomHookComponent>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
