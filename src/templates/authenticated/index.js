import React from "react";
import Appbar from "../../components/common/Appbar";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

function AuthenticatedTempalte(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Appbar />
      <Box flex="1" height="1" overflow="hidden">
        {props.children}
      </Box>
    </section>
  );
}

export default AuthenticatedTempalte;
