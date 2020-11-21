import React from "react";
import { IconButton as Button, IconButtonProps } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


export interface Props extends Omit<IconButtonProps, "size"> {
    icon : React.ReactNode;
}

const IconButton = (props: Props) => {
    const { icon,  ...iconButtonProps } = props;
    return(
        <Button children={icon} {...iconButtonProps} />
    )
}


export default IconButton;
