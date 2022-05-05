import { api } from "@utils/axios";
import qs from "qs";
import useJwtDecode from "../utils/hooks/JwtDecode";

class AuthenticationService {
  login(email, password) {
    const data = qs.stringify({
      email,
      password,
    });

    return api({
      method: "post",
      url: "/user/login?apikey=123456",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    })
      .then(function (response) {
        localStorage.setItem("token", JSON.stringify(response.data));
        const user = useJwtDecode(response.data);
        localStorage.setItem("user", JSON.stringify(user));
        return response.status;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  isLogin() {
    return localStorage.getItem("token") && localStorage.getItem("user")
      ? true
      : false;
  }
}

export default new AuthenticationService();
