import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Header from "../../components/Header/Header";

import styles from "../../assets/jss/myblog/views/homepage";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header brand="My Blog" fixed color="dark" {...rest} />
    </div>
  );
}
