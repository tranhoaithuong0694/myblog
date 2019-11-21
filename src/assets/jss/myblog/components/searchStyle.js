import { fade } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const searchStyle = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    width: "100%",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: 150,
      "&:focus": {
        width: 230
      }
    }
  }
}));

export default searchStyle;
