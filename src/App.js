import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// import Header from "./components/common/header";
import Header from "./components/common/Header2";
import Login from "./components/Login";
import Home from "./components/Home";
import FavoriteMovieList from "./components/FavoriteMovieList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/FavoriteMovieList" component={FavoriteMovieList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
