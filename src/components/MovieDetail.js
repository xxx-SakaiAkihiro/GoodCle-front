import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { compose } from "redux";
import Moment from "moment";
import _ from "lodash";
import StarIcon from "@material-ui/icons/Star";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Tooltip from "@material-ui/core/Tooltip";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    height: 450,
  },
  comments: {
    width: 850,
    height: 200,
  },
});

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
    console.log(this.props.match.params);
  }

  renderCategory() {
    return _.map(this.props.TMDbApi.genres, (genres) => (
      <novr>【{genres.name}】</novr>
    ));
  }

  renderRuntime() {
    const time = this.props.TMDbApi.runtime / 60;
    const hour = Math.floor(time);
    const min = Math.floor((time - hour) * 60);
    return (
      <nobr>
        {hour}h{min}m
      </nobr>
    );
  }

  renderDetail() {
    const { classes } = this.props;
    const url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={url + this.props.TMDbApi.poster_path}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              paragraph="true"
            >
              {this.props.TMDbApi.title}(
              {Moment(this.props.TMDbApi.release_date).format("YYYY")})
            </Typography>
            <Typography paragraph="true" variant="subtitle2" align="center">
              {Moment(this.props.TMDbApi.release_date).format("YYYY年MM月DD日")}
              ・{this.renderRuntime()}・{this.renderCategory()}
            </Typography>
            <CardActions disableSpacing align="center">
              <Tooltip title="お気に入り">
                <IconButton style={({ outline: "none" }, { fontSize: 30 })}>
                  <StarIcon style={{ fontSize: 40, color: "#1E345D" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="視聴済み">
                <IconButton style={{ outline: "none" }}>
                  <BookmarkIcon style={{ fontSize: 40, color: "#1E345D" }} />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Typography
              paragraph="true"
              variant="subtitle1"
              color="textSecondary"
            >
              {this.props.TMDbApi.tagline}
            </Typography>
            <h5>概要</h5>
            <Typography className={classes.comments} variant="subtitle1">
              {this.props.TMDbApi.overview}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <CardContent>{this.renderDetail()}</CardContent>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const TMDbApi = state.TMDbApi[ownProps.match.params.id];
  return { initialValues: TMDbApi, TMDbApi };
};

const mapDispatchToProps = { getMovieDetail };

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(MovieDetail);
