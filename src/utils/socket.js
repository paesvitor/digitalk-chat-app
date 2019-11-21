import io from "socket.io-client";

export default function() {
  const socket = io.connect(
    process.env.REACT_APP_ENV === "development"
      ? "http://localhost:3000"
      : "https://digitalk-api.herokuapp.com"
  );

  function registerHandler(onMessageReceived) {
    socket.on("message", onMessageReceived);
  }

  function unregisterHandler() {
    socket.off("message");
  }

  function join() {
    socket.connect();
  }

  function leave() {
    socket.disconnect();
  }

  return {
    join,
    leave,
    registerHandler,
    unregisterHandler
  };
}
