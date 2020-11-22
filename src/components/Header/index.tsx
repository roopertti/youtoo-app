import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { IconButton } from "../index";
import { Settings, Search, Back } from "../icons";
import VideoSearch from "./VideoSearch";
import useWindowSize from "../../hooks/useWindowSize";

const useStyles = makeStyles((theme: Theme) => ({
  brand: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
  },
  marginLeft: {
    marginLeft: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    brand: {
      flexGrow: 0,
    },
    header: {
      justifyContent: "space-between",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { width } = useWindowSize();
  const [searchVisible, setSearchVisible] = React.useState(false);

  /**
   * Using useWindowSize hook to determine whether screen width is mobile size
   */
  const isMobile = width && width < 600;

  /**
   * Renders either:
   * 1. search bar with back arrow to return to basic mobile header
   * 2. mobile header with brand and icon buttons for search and settings
   */
  const renderForMobile = () =>
    searchVisible ? (
      <>
        <IconButton
          className={classes.marginLeft}
          icon={<Back />}
          onClick={() => setSearchVisible(false)}
        />
        <VideoSearch fullWidth />
      </>
    ) : (
      <>
        <Typography className={classes.brand}>Youtoo</Typography>
        <IconButton
          icon={<Search />}
          onClick={() => setSearchVisible(!searchVisible)}
        />
        <IconButton icon={<Settings />} />
      </>
    );

  /**
   * This just renders basic desktop header
   */
  const renderForDesktop = () => (
    <>
      <Typography className={classes.brand}>Youtoo</Typography>
      <VideoSearch />
      <IconButton icon={<Settings />} />
    </>
  );

  return (
    <AppBar position="static" component="header">
      <Toolbar className={classes.header}>
        {isMobile ? renderForMobile() : renderForDesktop()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
