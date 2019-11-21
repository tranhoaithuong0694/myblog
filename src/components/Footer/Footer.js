import React from "react";

import footerStyle from "../../assets/jss/myblog/components/footerStyle";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Footer() {
  const classes = footerStyle();
  return (
    <footer className={classes.footer}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="caption" color="inherit">
            © Copyright 2019
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}
