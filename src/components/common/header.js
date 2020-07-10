import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MoodIcon from "@material-ui/icons/Mood";

// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Drawer from "@material-ui/core/Drawer";

const styles = {
  root: {
    background:
      "linear-gradient(89.93474287615243deg, rgba(127, 127, 130,1) 12.96484375%,rgba(126, 126, 129,1) 12.96484375%,rgba(48, 48, 59,1) 81.55859375%)",
    height: 60,
  },
  title: {
    fontSize: 35,
    flexGrow: 1,
  },
  icon: {
    fontSize:"xx-large",
    margin: "0px 15px",
  },
};

class Header extends Component {
  //   state = {
  //     left: false,
  //   };

  //   toggleDrawer = (side, open) => () => {
  //     this.setState({
  //       [side]: open,
  //     });
  //   };

  render() {
    const { classes } = this.props;

    // const sideList = (
    //   <div className={classes.list}>
    //     <List>
    //       <ListItem button>
    //         <ListItemText primary="Home" />
    //       </ListItem>
    //       <ListItem button>
    //         <ListItemText primary="About" />
    //       </ListItem>
    //     </List>
    //   </div>
    // );

    return (
      <React.Fragment>
        <AppBar position="relative" className={classes.root}>
          <Toolbar>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer("left", false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer("left", false)}
                onKeyDown={this.toggleDrawer("left", false)}
              >
                {sideList}
              </div>
            </Drawer> */}
            <strong className={classes.title}>GoodCle</strong>
            <NotificationsIcon style={styles.icon} />
            <MoodIcon style={styles.icon} />
            <SearchIcon style={styles.icon} />
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
