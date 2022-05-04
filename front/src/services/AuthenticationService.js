import { api } from "@utils/axios";

class AuthenticationService {
  // body: email, password
  login(body) {
    return api
      .post("/user/login", { body })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          // localStorage.setItem("token", JSON.stringify(response.data.token));
          window.location.reload();
        }
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  isLogin() {
    return localStorage.getItem("token") && localStorage.getItem("user")
      ? true
      : false;
  }
}

export default new AuthenticationService();
