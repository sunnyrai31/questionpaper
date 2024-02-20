import "./App.css";
import QuestionList from "./Question/QuestionList";
import HeaderComponent from "./Components/HeaderComponent";
import WelcomeComponent from "./Components/WelcomeComponent";
import InterviewQuestionSelectOnDemand from "./Question/InterviewQuestionSelectOnDemand";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutComponent from "./Components/AboutComponent";
import UseStateComponent from "./Hooks/UseStateHook";
import UseStateCustomHookComponent from "./Hooks/UseStateCustomHook";
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
            path="/interviewQuestionsQuiz"
            element={<QuestionList></QuestionList>}
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
            path="/interviewQuestionSelectOnDemand"
            element={
              <InterviewQuestionSelectOnDemand></InterviewQuestionSelectOnDemand>
            }
          ></Route>
          <Route
            path="/interviewQuestionCounterApp"
            element={<UseStateComponent></UseStateComponent>}
          ></Route>
          <Route
            path="/hooksUsestate"
            element={<UseStateComponent></UseStateComponent>}
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
