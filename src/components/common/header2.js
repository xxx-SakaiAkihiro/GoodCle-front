import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(89.93474287615243deg, rgba(127, 127, 130,1) 12.96484375%,rgba(126, 126, 129,1) 12.96484375%,rgba(48, 48, 59,1) 81.55859375%)",
    height: 60,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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
  const open = Boolean(anchorEl);

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

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            GoodCle
          </Typography>
          <div>
            <NotificationsIcon className={classes.icon} />
          </div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
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
              <Link to="/FavoriteMovieList">
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
              <Link to="/">
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
            <Link to="/">
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="ログアウト" />
              </StyledMenuItem>
            </Link>
          </StyledMenu>
          <div>
            <SearchIcon className={classes.icon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
