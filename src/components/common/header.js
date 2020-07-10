import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";

// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Drawer from "@material-ui/core/Drawer";

const styles = {
  root: {
    background:
      " linear-gradient(90deg, rgba(3,3,53,1) 0%, rgba(57,109,154,1) 100%)",
    height: 60,
  },
  title: {
    fontSize: 35,
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
    const Spacer = require("react-spacer");

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
            <Spacer grow="1" />
            <NotificationsIcon />
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
