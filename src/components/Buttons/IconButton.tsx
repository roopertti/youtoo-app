import React from "react";
import { IconButton as Button, IconButtonProps } from "@material-ui/core";

export interface Props extends Omit<IconButtonProps, "size"> {
  icon: React.ReactNode;
}

const IconButton = (props: Props) => {
  const { icon, ...iconButtonProps } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...iconButtonProps}>{icon}</Button>;
};

export default IconButton;
