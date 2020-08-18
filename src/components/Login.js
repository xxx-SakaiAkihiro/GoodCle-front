import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
  },
  image: {
    backgroundImage:
      "url(https://source.unsplash.com/featured/?movie,Cinema,popcorn)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 650,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignInSide() {
  const classes = useStyles();

    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="linear-gradient(89.93474287615243deg, rgba(127, 127, 130,1) 12.96484375%,rgba(126, 126, 129,1) 12.96484375%,rgba(48, 48, 59,1) 81.55859375%)"
                className={classes.submit}
                // onClick={this.login}
                >
                Login
              </Button>
            </Link>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
