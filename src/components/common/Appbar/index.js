import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { authSignoutRequest } from "store/modules/auth/actions";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();

  function _handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function _handleClose() {
    setAnchorEl(null);
  }

  function _handleSignout() {
    dispatch(authSignoutRequest());
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          digitalk
        </Typography>
        <div>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={_handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={_handleClose}
          >
            <MenuItem onClick={_handleSignout}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
