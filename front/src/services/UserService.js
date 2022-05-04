import { api } from "@utils/axios";

class UserService {
  // Recupère tout les utilisateurs
  getAllUser() {
    return api
      .get("/user")
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
      .get(`/user/${id}`)
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
      .get(`/user/${id}/annonce`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Ajoute l'utilisateur
  addUser(User) {
    return api
      .post("/user", { User })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Mise à jour de l'utilisateur
  updateUser(id) {
    return api
      .put(`/User/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Suppression de l'utilisateur
  deleteUser(id) {
    return api
      .delete(`/User/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}

export default new UserService();
