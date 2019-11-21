import makeStyles from "@material-ui/core/styles/makeStyles";

const headerStyle = makeStyles(theme => ({
  brand: {
    display: "block"
  },
  brandLink: {
    padding: theme.spacing(1),
    textDecoration: "none",
    color: "inherit"
  }
}));

export default headerStyle;
