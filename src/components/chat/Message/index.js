import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

function Message({ message }) {
  return (
    <Box>
      <Typography>{message.user.username}</Typography>

      <Typography>{message.text}</Typography>
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
