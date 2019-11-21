import makeStyles from "@material-ui/core/styles/makeStyles";

const footerStyle = makeStyles(theme => ({
  footer: {
    position: "absolute",
    bottom: "0",
    left: "0",
    textAlign: "center",
    color: "inherit",
    width: "100%"
  }
}));

export default footerStyle;
