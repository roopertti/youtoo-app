import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Header, Footer } from "../index";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    flex: "1 0 auto",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  layoutWrapper: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
