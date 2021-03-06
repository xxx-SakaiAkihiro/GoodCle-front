import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MovieIcon from "@material-ui/icons/Movie";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Search from "./Search";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  outline: {
    outline: 0,
  },
  list: {
    width: "100%",
    minWidth: 240,
  },
  icon: {
    fontSize: "xx-large",
    margin: "0px 15px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.text.secondary,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSearch, setAnchorElSerarch] = React.useState(null);
  const open = Boolean(anchorEl);
  const openSerch = Boolean(anchorElSearch);

  const [listopen, setOpen] = React.useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setOpen(!listopen);
  };

  const handleSearch = (event) => {
    setAnchorElSerarch(event.currentTarget);
  };

  const closeSearch = () => {
    setAnchorElSerarch(null);
  };

  return (
    <div>
      <Toolbar>
        <div>
          <IconButton
            // onClick={handleMenu}
            color="inherit"
            style={{ outline: "none" }}
          >
            <Badge color="secondary" badgeContent={10} className={classes.margin}>
              <NotificationsIcon className={classes.icon} />
            </Badge>
          </IconButton>
        </div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          style={{ outline: "none" }}
        >
          <AccountCircle className={classes.icon} />
        </IconButton>

        <StyledMenu
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <ListItem className={classes.outline}>
            <ListItemIcon>
              <InsertEmoticonIcon />
            </ListItemIcon>
            <ListItemText primary="大澤" />
          </ListItem>
          <hr />
          <ListItem button onClick={handleClick} className={classes.list}>
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="マイ映画" />

            {listopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={listopen}
            timeout="auto"
            unmountOnExit
            onClick={handleClose}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/FavoriteMovieList"
            >
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="お気に入り" />
                  </StyledMenuItem>
                </ListItem>
              </List>
            </Link>
          </Collapse>
          <Collapse
            in={listopen}
            timeout="auto"
            unmountOnExit
            onClick={handleClose}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/IntroductionMovieList"
            >
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <CardGiftcardIcon />
                    </ListItemIcon>
                    <ListItemText primary="紹介一覧" />
                  </StyledMenuItem>
                </ListItem>
              </List>
            </Link>
          </Collapse>
          <hr />
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </StyledMenuItem>
          </Link>
        </StyledMenu>
        <div>
          <IconButton
            onClick={handleSearch}
            color="inherit"
            style={{ outline: "none" }}
          >
            <SearchIcon className={classes.icon} />
          </IconButton>
        </div>
      </Toolbar>
      <StyledMenu
        anchorEl={anchorElSearch}
        keepMounted
        open={openSerch}
        onClose={closeSearch}
      >
        <Search />
      </StyledMenu>
    </div>
  );
}
