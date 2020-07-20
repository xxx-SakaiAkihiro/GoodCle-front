import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../store/actions/index";

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
    console.log(this.props.match.params);
  }

  render() {
    return (
      <React.Fragment>
        <h1>映画詳細画面</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const TMDbApi = state.TMDbApi[ownProps.match.params.id];
  return { initialValues: TMDbApi, TMDbApi };
};

const mapDispatchToProps = { getMovieDetail };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
