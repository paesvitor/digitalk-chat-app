import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#AB5FC8",
      main: "#AB5FC8",
      dark: "#AB5FC8",
      contrastText: "#fff"
    },
    secondary: {
      light: "#49D0E0",
      main: "#45CDE1",
      dark: "#00A0F7",
      contrastText: "#fff"
    }
  },

  overrides: {
    MuiButton: {
      root: {
        height: "50px",
        fontSize: 14,
        textTransform: "capitalize",
        fontWeight: 400
      },
      contained: {
        boxShadow: "none"
      }
    },

    MuiPaper: {
      elevation1: {
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)"
      }
    },
    MuiOutlinedInput: {
      root: {
        borderColor: "#DADADA",
        background: "#fff"
      },
      notchedOutline: {
        borderColor: "#DADADA !important"
      }
    }
  }
});

export default theme;
