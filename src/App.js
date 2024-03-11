import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from "./Store/redux-store";

function App() {
  useEffect(() => {
    // document.title = process.env.REACT_APP_TITLE;
  }, []);
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <HeaderComponent></HeaderComponent>
          <Routing></Routing>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
