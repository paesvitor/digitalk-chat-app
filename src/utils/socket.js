import io from "socket.io-client";

const socket = io(
  process.env.REACT_APP_ENV === "development"
    ? `http://localhost:3000`
    : `http://localhost:3000`
);

export default socket;
