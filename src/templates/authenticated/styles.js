import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    maxHeight: "100%",
    overflow: "hidden"
  }
}));
