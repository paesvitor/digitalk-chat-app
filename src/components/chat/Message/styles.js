import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    background: ({ sender }) =>
      sender ? theme.palette.primary.main : "#E9ECF1",
    alignSelf: ({ sender }) => (sender ? "flex-end" : "flex-start"),
    color: ({ sender }) => (sender ? "#fff" : "#000"),
    textAlign: ({ sender }) => (sender ? "right" : "left"),
    padding: theme.spacing(2),
    borderRadius: 6,
    marginBottom: theme.spacing(2)
  }
}));
