import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatStoreRequest,
  chatIndexRequest,
  chatStoreSuccess
} from "../../store/modules/chat/actions";
import { Box } from "@material-ui/core";
import socket from "../../utils/socket";

function Chat() {
  const chat = useSelector(state => state.chat);
  const userId = useSelector(state => state.auth.user._id);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function _handleMessage(message) {
    message.user._id !== userId && dispatch(chatStoreSuccess(message));
  }

  function _handleSubmit(e) {
    e.preventDefault();
    message && dispatch(chatStoreRequest(message));
    setMessage("");
  }

  useMemo(() => {
    dispatch(chatIndexRequest());

    socket.on("message", _handleMessage);
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Box style={{ flex: 1, overflowY: "scroll" }}>
        {chat.payload.map(message => (
          <div key={message._id}>
            <div>{message.text}</div>
            <div>{message.user.username}</div>
          </div>
        ))}
      </Box>

      <form onSubmit={_handleSubmit}>
        <input
          type="text"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Enviar</button>
      </form>
    </Box>
  );
}

export default Chat;
