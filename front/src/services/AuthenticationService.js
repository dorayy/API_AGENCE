import { api } from "@utils/axios";

class AuthenticationService {
  login(code) {
    return api
      .post("/user/login", { code })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.discordUser)
          );
          localStorage.setItem("token", JSON.stringify(response.data.token));
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
