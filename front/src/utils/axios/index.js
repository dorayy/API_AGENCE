import axios from "axios";

// const baseURL = process.env.REACT_APP_API_ENTRYPOINT;
const baseURL = "http://localhost:8080/api/v2";

const api = axios.create({
  baseURL,
});

export { api, baseURL };
