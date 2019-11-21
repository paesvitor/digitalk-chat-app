import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Logo from "../../components/Logo";
import useStyles from "./styles";
import { signinRequest } from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const auth = useSelector(state => state.auth);
  const history = useHistory();

  function _handleSignin(e) {
    e.preventDefault();
    dispatch(signinRequest(username, password, passwordConfirm));
  }

  useEffect(() => {
    auth.authenticated && history.replace("/chat");
  }, [auth.authenticated]);

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Box textAlign="center">
        <Box>
          <Logo />
        </Box>
        <form className={classes.form} onSubmit={_handleSignin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuário"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password-confirm"
            label="Confirme a senha"
            type="password"
            id="password-confirm"
            onChange={e => setPasswordConfirm(e.target.value)}
          />

          {auth.error && (
            <Box mt={2}>
              <Typography variant="body2" color="error">
                {auth.error}
              </Typography>
            </Box>
          )}

          <Box mt={3} mb={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={auth.loading}
            >
              Cadastrar
            </Button>
          </Box>

          <Link to="/cadastrar">
            <Typography variant="body2" color="primary">
              {"Já tem conta? Faça login"}
            </Typography>
          </Link>
        </form>
      </Box>
    </Container>
  );
}
