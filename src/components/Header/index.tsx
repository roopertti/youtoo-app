import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { IconButton } from "../index";
import { Settings } from "../icons";


const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <Typography>Youtoo</Typography>
        <div className={classes.grow} />
        <IconButton icon={<Settings />} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
