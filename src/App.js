// react
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "sass/App.scss";

// components
import MyNavbar from "components/MyNavbar";
import MyFooter from "components/MyFooter";
import Home from "pages/Home";
import About from "pages/About";
import Works from "pages/Works";

import { ThemeContext } from "./Provider";

const App = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`App ${mode}`}>
      <Router>
        <MyNavbar />
        <Switch>
          <div className="container-content">
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/works" component={Works}></Route>
          </div>
        </Switch>
        <MyFooter />
      </Router>
    </div>
  );
};

export default App;
