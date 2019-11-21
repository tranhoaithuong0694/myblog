import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import Search from "../Search/Search";
import Typography from "@material-ui/core/Typography";

import headerStyle from "../../assets/jss/myblog/components/headerStyle";
import { Link } from "react-router-dom";

export default function Header(props) {
  const classes = headerStyle();
  const { brand } = props;
  const brandComponent = (
    <Typography className={classes.brand} variant="h6" noWrap>
      <Link to="/" className={classes.brandLink}>
        {brand}
      </Link>
    </Typography>
  );
  return (
    <AppBar>
      <Toolbar>
        {brandComponent}
        <Search />
      </Toolbar>
    </AppBar>
  );
}
