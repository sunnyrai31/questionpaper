import logo from "./logo.svg";
import "./App.css";
import QuestionList from "./Components/QuestionList";
import HeaderComponent from "./Components/HeaderComponent";
import FileUploader from "./Components/FileUploader";
import WelcomeComponent from "./Components/WelcomeComponent";
import InterviewQuestionSelectOnDemand from "./Components/InterviewQuestionSelectOnDemand";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutComponent from "./Components/AboutComponent";
import UseStateComponent from "./Hooks/UseStateHook";
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
          <Route path="/upload" element={<FileUploader></FileUploader>}></Route>
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
            path="/hooksUsestate"
            element={<UseStateComponent></UseStateComponent>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
