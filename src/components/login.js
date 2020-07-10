import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>ログイン画面</h1>
        <Link to="/home">
          <button>ログインする</button>
        </Link>
      </div>
    );
  }
}

export default Login;