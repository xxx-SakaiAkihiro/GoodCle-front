import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HeaderIcons from "./HeaderIcons";

// import { TogglePattern } from "react-toggle-pattern";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(89.93474287615243deg, rgba(3,3,53,1) 0%, rgba(57,109,154,1) 100%)",
    height: 60,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              GoodCle
            </Link>
          </Typography>
          {/* <TogglePattern> */}
            <HeaderIcons />
          {/* </TogglePattern> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
