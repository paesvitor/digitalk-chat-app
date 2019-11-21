import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  }
}));
