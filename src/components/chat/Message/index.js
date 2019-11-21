import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import moment from "moment";

function Message({ message }) {
  const userId = useSelector(state => state.auth.user._id);
  const sender = userId === message.user._id;
  const classes = useStyles({ sender });

  return (
    <Box className={classes.root}>
      <Box className={classes.message}>
        <Typography variant="caption">{message.user.username}</Typography>

        <Typography>{message.text}</Typography>
      </Box>

      <Typography variant="caption" className={classes.date}>
        {moment(message.createdAt).format("LT")}
      </Typography>
    </Box>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    createdAt: PropTypes.string,
    user: PropTypes.shape({
      _id: PropTypes.string,
      username: PropTypes.string
    })
  })
};

export default Message;
