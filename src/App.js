import logo from "./logo.svg";
import "./App.css";
import QuestionList from "./Components/QuestionList";
import HeaderComponent from "./Components/HeaderComponent";
import FileUploader from "./Components/FileUploader";
import WelcomeComponent from "./Components/WelcomeComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutComponent from "./Components/AboutComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/upload" element={<FileUploader></FileUploader>}></Route>
          <Route
            path="/questionPaper"
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
