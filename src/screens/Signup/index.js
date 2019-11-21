import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Logo from "../../components/Logo";
import useStyles from "./styles";

export default function Signup() {
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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirme a senha"
            type="password"
            id="confirm-password"
          />

          <Box mt={3} mb={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </Box>

          <Link to="/cadastrar">
            <Typography variant="body2" color="primary">
              {"Não tem conta? Faça um cadastro"}
            </Typography>
          </Link>
        </form>
      </Box>
    </Container>
  );
}
