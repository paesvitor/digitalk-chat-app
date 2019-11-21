import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  messages: {
    padding: theme.spacing(3),

    display: "flex",
    flexDirection: "column",
    overflowY: "scroll"
  }
}));
