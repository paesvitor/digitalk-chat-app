import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Logo from "../../components/Logo";
import useStyles from "./styles";

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Box textAlign="center">
        <Box>
          <Logo />
        </Box>
        <form className={classes.form} noValidate>
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
            autoComplete="current-password"
          />

          <Box mt={3} mb={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </Box>

          <Link href="#" variant="body2">
            {"Não tem conta? Cadastre-se"}
          </Link>
        </form>
      </Box>
    </Container>
  );
}
