import React from "react";
import { Grid } from "@material-ui/core";

import { Play, Pause, Next, Previous } from "../icons";
import { IconButton } from "../index";

import { makeStyles, Theme } from "@material-ui/core/styles";

export interface Props {
  isPlaying: boolean;
  buttonSize?: "small" | "medium";
  disabled?: boolean;
  play: () => void;
  skipNext: () => void;
  skipPrev: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        backgroundColor: theme.palette.background.default,
    }
  }));

const VideoButtons = (props: Props) => {
  const { isPlaying, disabled = false, play, skipNext, skipPrev } = props;
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} spacing={1} container>
        <Grid item>
          <IconButton
            onClick={skipPrev}
            disabled={disabled}
            icon={<Previous />}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={play}
            disabled={disabled}
            icon={isPlaying ? <Pause /> : <Play />}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={skipNext} disabled={disabled} icon={<Next />} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoButtons;
