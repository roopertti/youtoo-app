import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Header, Footer } from "../index"


const useStyles = makeStyles({
  main: {
    flex: "1 0 auto",
  },
  layoutWrapper: {
    display: "flex",
    flexDirection: "column",
  },
});

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
