import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useDispatch } from "react-redux";
import { authSignoutRequest } from "../../../store/modules/auth/actions";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

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
        <Typography variant="h6">Chat</Typography>
        <div>
          <IconButton
            aria-label="account of current user"
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
            <MenuItem onClick={_handleClose}>Meu Perfil</MenuItem>
            <MenuItem onClick={_handleSignout}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
