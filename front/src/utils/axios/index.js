import axios from "axios";

// const baseURL = process.env.REACT_APP_API_ENTRYPOINT;
const baseURL = "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export { api, baseURL };
