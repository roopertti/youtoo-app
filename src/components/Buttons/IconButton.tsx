import React from "react";
import { IconButton as Button, IconButtonProps } from "@material-ui/core";

import { makeStyles, Theme, fade } from "@material-ui/core/styles";


export interface Props extends Omit<IconButtonProps, "size"> {
    icon : React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: fade(theme.palette.primary.contrastText, 0.9)
        }
    }
  }));

const IconButton = (props: Props) => {
    const { icon,  ...iconButtonProps } = props;
    const classes = useStyles();
    return(
        <Button className={classes.button} children={icon} {...iconButtonProps} />
    )
}


export default IconButton;
