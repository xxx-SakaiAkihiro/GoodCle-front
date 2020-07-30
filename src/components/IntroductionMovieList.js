import React, { Component } from "react";
import { connect } from "react-redux";
import { readTMDbAPI } from "../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Paper from "@material-ui/core/Paper";
import _ from "lodash";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StarIcon from "@material-ui/icons/Star";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Tooltip from "@material-ui/core/Tooltip";
import Moment from "moment";
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
  root: {
    maxWidth: 200,
    margin: "0px 19px",
  },
  media: {
    maxWidth: 180,
    margin: "10px 10px 0px 10px",
  },
  movieTitle: {
    margin: "0px 0px 5px",
    fontWeight: "bold",
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
      <Card
        key={TMDbApi.id}
        className={classes.root}
        style={{
          display: "inline-block",
        }}
      >
        <Link to={`/IntroductionMovie/${TMDbApi.id}`}>
          <img
            src={url + TMDbApi.poster_path}
            alt={TMDbApi.title}
            className={classes.media}
          />
        </Link>
        <CardContent>
          <Link
            to={`/IntroductionMovie/${TMDbApi.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography className={classes.movieTitle}>
              {TMDbApi.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary">
            {Moment(TMDbApi.release_date).format("YYYY年MM月DD日")}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="お気に入り">
            <IconButton style={{ outline: "none" }}>
              <StarIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="視聴済み">
            <IconButton style={{ outline: "none" }}>
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card>
          <Paper className={classes.title}>紹介映画</Paper>
        </Card>
        <Card>
          <Container>
            <CardContent>{this.renderTMDbApi()}</CardContent>
          </Container>
        </Card>
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
