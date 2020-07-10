import React, { Component } from "react";
import { connect } from "react-redux";
import { readTMDbAPI } from "../store/actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.readTMDbAPI();
  }
  render() {
    // const props = this.props;

    return <React.Fragment></React.Fragment>;
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = { readTMDbAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
