import axios from "axios";

let baseURL;

if (process.env.REACT_APP_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "http://localhost:3000";
}

const instance = axios.create({
  baseURL,
  timeout: 60000
});

export default instance;
