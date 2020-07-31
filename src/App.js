import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import FavoriteMovieList from "./components/FavoriteMovieList";
import IntroductionMovieList from "./components/IntroductionMovieList";
import MovieDetail from "./components/MovieDetail";
import IntroductionMovie from "./components/IntroductionMovie";
import IntroductionEdit from "./components/IntroductionEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/FavoriteMovieList"
            component={FavoriteMovieList}
          />
          <Route
            exact
            path="/IntroductionMovieList"
            component={IntroductionMovieList}
          />
          <Route exact path="/MovieDetail/:id" component={MovieDetail} />
          <Route
            exact
            path="/IntroductionMovie/:id"
            component={IntroductionMovie}
          />
          <Route
            exact
            path="/IntroductionEdit/:id"
            component={IntroductionEdit}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
