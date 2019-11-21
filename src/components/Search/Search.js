import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

import useStyles from "../../assets/jss/myblog/components/searchStyle";

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
