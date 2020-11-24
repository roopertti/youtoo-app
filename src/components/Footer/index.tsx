import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { VideoButtons } from "../index";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    boxShadow: "0px 0px 8px #343434",
    padding: "2rem 1.5rem",
    flexShrink: 1,
    backgroundColor: theme.palette.primary.dark
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [isWatching, setIsWatching] = useState(false);

  return (
    <footer className={classes.footer}>
      <Grid className={classes.container} container>
        <Grid>
          <VideoButtons
            isPlaying={isWatching}
            play={() => setIsWatching(!isWatching)}
            skipNext={() => {}}
            skipPrev={() => {}}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
