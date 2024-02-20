import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";

import { useEffect } from "react";
import Routing from "./Routing";

function App() {
  useEffect(() => {
    // document.title = process.env.REACT_APP_TITLE;
  }, []);
  // const routingDetails = [
  //   { path: "/", componentName: WelcomeComponent },
  //   { path: "/about", componentName: AboutComponent },
  //   { path: "/QuestionQuiz", componentName: QuestionQuiz },
  //   { path: "/SelectOnDemand", componentName: SelectOnDemand },
  //   { path: "/UseState", componentName: UseStateHook },
  //   { path: "/hooksUsestate", componentName: UseStateHook },
  //   { path: "/hooksUseEffect", componentName: UseEffectHook },
  //   { path: "/hooksUseStateCustom", componentName: UseStateCustomHook },
  // ];
  return (
    <Router>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Routing></Routing>
      </div>
    </Router>
  );
}

export default App;
