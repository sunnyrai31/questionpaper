import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Routing from "./Routing";

function App() {
  useEffect(() => {
    // document.title = process.env.REACT_APP_TITLE;
  }, []);
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
