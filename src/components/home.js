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

const styles = {
  title: {
    background:
      "radial-gradient(circle, rgba(3,3,53,1) 0%, rgba(57,109,154,1) 100%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 28,
    margin: "20px 20px 20px 20px",
    padding: "10px 10px ",
    width: 100,
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
  gritTitle: {
    color: "white",
    flexWrap: "wrap",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
};

class Home extends Component {
  componentDidMount() {
    this.props.readTMDbAPI();
  }

  renderTMDbApi() {
    const { classes } = this.props;
    const url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    return _.map(this.props.TMDbApi, (TMDbApi) => (
      <GridListTile key={TMDbApi.id}>
        <img src={url + TMDbApi.poster_path} alt={TMDbApi.title} />
        <GridListTileBar
          title={TMDbApi.title}
          classes={{
            grit: classes.titleBar,
            gritTitle: classes.gritTitle,
          }}
        />
      </GridListTile>
    ));
  }

  render() {
    // const props = this.props;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper className={classes.title}>人気映画</Paper>
        </Grid>
        <Grid className={classes.grit}>
          <GridList className={classes.gridList} cols={4.5}>
            {this.renderTMDbApi()}
          </GridList>
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
