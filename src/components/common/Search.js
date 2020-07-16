import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  icon: {
    margin: "10px 0px 0px 20px",
  },
  textField: {
    margin: "0px 10px 0px 0px",
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <div className={classes.textField}>
        <SearchIcon className={classes.icon} />
        <TextField
          id="standard-search"
          placeholder="映画名、人物名で検索"
          type="search"
        />
      </div>
    </form>
  );
}
