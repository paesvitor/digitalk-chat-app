import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    borderTop: "1px solid #cecece"
  },

  text: {
    flex: 1
  },

  form: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  }
}));
