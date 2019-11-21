import React from "react";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Search from "../Search/Search";

import styles from "../../assets/jss/myblog/components/headerStyle";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color, absolute, fixed, brand } = props;

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <AppBar>
      <Toolbar>
        <div className={classes.flex}>{brandComponent}</div>
        <Search />
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "red"
};
