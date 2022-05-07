import { api } from "@utils/axios";
import qs from "qs";

class UserService {
  // Recupère tout les utilisateurs
  getAllUser() {
    const token = localStorage.getItem("token").replaceAll('"', "");

    return api
      .get("/user?apikey=123456", {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // Recupère l'utilisateur
  getUserByID(id) {
    return api
      .get(`/user/${id}?apikey=123456`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Recupère les annonces de l'utilisateur
  getUserAnnonce(id) {
    return api
      .get(`/user/${id}/annonce?apikey=123456`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  addUser(email, password, username) {
    const data = qs.stringify({
      email,
      password,
      username,
    });
    return api({
      method: "post",
      url: "/user?apikey=123456",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        token: JSON.parse(localStorage.getItem("token")),
      },
      data,
    })
      .then(function (response) {
        return response.status;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // TODO: Mise à jour de l'utilisateur
  updateUser(id, body) {
    const data = qs.stringify(body);
    return api({
      method: "put",
      url: `/user/${id}?apikey=123456`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        token: JSON.parse(localStorage.getItem("token")),
      },
      data,
    })
      .then((response) => {
        return response.status;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Suppression de l'utilisateur
  deleteUser(id) {
    const token = localStorage.getItem("token").replaceAll('"', "");
    return api
      .delete(`/User/${id}?apikey=123456`, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        return response.status;
      })
      .catch((error) => {
        return error.response.status;
      });
  }

  updatemyinfos(id, body) {
    const data = qs.stringify(body);
    return api({
      method: "put",
      url: `/user/${id}/updatemyinfos?apikey=123456`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        token: JSON.parse(localStorage.getItem("token")),
      },
      data,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}

export default new UserService();
