import React, { Component } from "react";
import { connect } from "react-redux";
import { readTMDbAPI } from "../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const styles = {
  title: {
    background:
      "radial-gradient(circle, rgba(3,3,53,1) 0%, rgba(57,109,154,1) 100%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 50,
    margin: "20px 20px 20px 20px",
    padding: "10px 10px ",
    width: 110,
    fontSize: 22,
  },
  grit: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  EntireGrit: {
    margin: "30px 0px",
  },
};

class Home extends Component {
  componentDidMount() {
    this.props.readTMDbAPI();
  }

  renderTMDbApi() {
    const url = "https://image.tmdb.org/t/p/w154";
    return _.map(this.props.TMDbApi, (TMDbApi) => (
      <GridListTile key={TMDbApi.id} rows={TMDbApi.rows || 1.5}>
        <Link to={`/MovieDetail/${TMDbApi.id}`}>
          <img src={url + TMDbApi.poster_path} alt={TMDbApi.title} />
        </Link>
        <GridListTileBar title={TMDbApi.title} />
      </GridListTile>
    ));
  }

  render() {
    // const props = this.props;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid className={classes.EntireGrit}>
          <Paper className={classes.title}>人気映画</Paper>
          <Grid className={classes.grit}>
            <Col xs={11}>
              <GridList className={classes.gridList} cols="auto">
                {this.renderTMDbApi()}
              </GridList>
            </Col>
          </Grid>
        </Grid>
        <hr />
        <Grid className={classes.EntireGrit}>
          <Paper className={classes.title} style={{ width: 160 }}>
            おすすめ映画
          </Paper>
          <Grid className={classes.grit}>
            <Col xs={11}>
              <GridList className={classes.gridList} cols="auto">
                {this.renderTMDbApi()}
              </GridList>
            </Col>
          </Grid>
        </Grid>
        <hr />
        <Grid className={classes.EntireGrit}>
          <Paper className={classes.title} style={{ width: 200 }}>
            あなたに紹介映画
          </Paper>
          <Grid className={classes.grit}>
            <Col xs={11}>
              <GridList className={classes.gridList} cols="auto">
                {this.renderTMDbApi()}
              </GridList>
            </Col>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ TMDbApi: state.TMDbApi });
const mapDispatchToProps = { readTMDbAPI };

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
