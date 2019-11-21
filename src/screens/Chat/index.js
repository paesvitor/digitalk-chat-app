import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatStoreRequest,
  chatIndexRequest
} from "../../store/modules/chat/actions";
import { Box } from "@material-ui/core";

function Chat() {
  const chat = useSelector(state => state.chat);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatIndexRequest());
  }, [dispatch]);

  function _handleSubmit(e) {
    e.preventDefault();
    message && dispatch(chatStoreRequest(message));
    setMessage("");
  }

  return (
    <Box>
      {chat.payload.map(message => (
        <div key={message._id}>{message.text}</div>
      ))}

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
