import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Box, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

function SendBar({ onSubmit }) {
  const classes = useStyles();
  const [text, setText] = useState("");

  function _handleSubmit(e) {
    e.preventDefault();
    if (text) {
      onSubmit(text);
      setText("");
    }
  }

  return (
    <section className={classes.root}>
      <form onSubmit={_handleSubmit} className={classes.form}>
        <TextField
          id="outlined-textarea"
          placeholder="Escreva uma mensagem"
          multiline
          rows="2"
          margin="normal"
          variant="outlined"
          value={text}
          onChange={e => setText(e.target.value)}
          className={classes.text}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
}

SendBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SendBar;
