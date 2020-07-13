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

import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
    width: 160,
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
    transform: "translateZ(0)",
    width: 800,
  },
  gritTitle: {
    color: "white",
    flexWrap: "wrap",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  listTileBar:{
    height:100,
    titleWrapActionPosLeft : "pre-line",
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
};

class FavoriteMovieList extends Component {
  componentDidMount() {
    this.props.readTMDbAPI();
  }

  renderTMDbApi() {
    const { classes } = this.props;
    const url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    return _.map(this.props.TMDbApi, (TMDbApi) => (
      <GridListTile key={TMDbApi.id} rows={TMDbApi.rows || 2} >
        <img src={url + TMDbApi.poster_path} alt={TMDbApi.title} />
        <GridListTileBar
          title={TMDbApi.title}
          classes={{
            grit: classes.titleBar,
            gritTitle: classes.gritTitle,
          }}
          className={classes.listTileBar}
        />
      </GridListTile>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper className={classes.title}>お気に入り映画</Paper>
        </Grid>
        <Grid className={classes.grit}>
          <GridList className={classes.gridList} cols={3}>
            {this.renderTMDbApi()}
          </GridList>
        </Grid>
      </React.Fragment>
    );
  }
}
FavoriteMovieList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ TMDbApi: state.TMDbApi });
const mapDispatchToProps = { readTMDbAPI };

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FavoriteMovieList);
