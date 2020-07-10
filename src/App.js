import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/common/header";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
