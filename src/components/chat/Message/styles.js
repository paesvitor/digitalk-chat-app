import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: ({ sender }) => (sender ? "flex-end" : "flex-start"),
    color: ({ sender }) => (sender ? "#fff" : "#000"),
    textAlign: ({ sender }) => (sender ? "right" : "left"),
    marginBottom: theme.spacing(2)
  },

  message: {
    background: ({ sender }) =>
      sender ? theme.palette.primary.main : "#E9ECF1",
    borderRadius: 6,
    padding: theme.spacing(2)
  },

  date: {
    color: "#000",
    padding: theme.spacing(0.5)
  }
}));
