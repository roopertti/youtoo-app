import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    boxShadow: "0px 0px 8px #343434",
    padding: "2rem 1.5rem",
    flexShrink: 1,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h4>Insert video controls here</h4>
    </footer>
  );
};

export default Footer;
