import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { Play, Pause, Next, Previous } from "../icons";
import { IconButton } from "../index";

export interface Props {
    isPlaying: boolean;
    buttonSize?: "small" | "medium";
    disabled?: boolean;
    play: () => void;
    skipNext: () => void;
    skipPrev: () => void;
}

const VideoButtons = (props: Props) => {
    const { isPlaying, disabled = false, play, skipNext, skipPrev } = props;
    return(
        <>
            <Grid spacing={1} container >
                <Grid item>
                    <IconButton onClick={skipPrev} disabled={disabled} icon={<Previous />}/>
                </Grid>
                <Grid item>
                    <IconButton onClick={play} disabled={disabled} icon={isPlaying? <Pause /> : <Play /> }/>
                </Grid>
                <Grid item>
                    <IconButton onClick={skipNext} disabled={disabled} icon={<Next />}/>
                </Grid>
            </Grid>
        </>
    )
}

export default VideoButtons;
