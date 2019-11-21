import React, { useMemo, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatStoreRequest,
  chatIndexRequest,
  chatStoreSuccess
} from "store/modules/chat/actions";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import socket from "utils/socket";
import Message from "components/chat/Message";
import SendBar from "components/chat/SendBar";

function Chat() {
  const chat = useSelector(state => state.chat);
  const userId = useSelector(state => state.auth.user._id);
  const dispatch = useDispatch();
  const classes = useStyles();
  const messagesEndRef = useRef();

  function _handleMessage(message) {
    message.user._id !== userId && dispatch(chatStoreSuccess(message));
  }

  function _handleSubmit(text) {
    dispatch(chatStoreRequest(text));
  }

  function _scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    _scrollToBottom();
  }, [chat.payload]);

  useMemo(() => {
    dispatch(chatIndexRequest());

    socket.on("message", _handleMessage);
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <section className={classes.messages}>
        {chat.payload.map(message => (
          <Message message={message} key={message._id} />
        ))}
        <div ref={messagesEndRef} />
      </section>

      <SendBar onSubmit={_handleSubmit} />
    </section>
  );
}

export default Chat;
