import { api } from "@utils/axios";

class AnnonceService {
  // Recupère toute les annonces
  getAllAnnonce() {
    return api
      .get("/annonce")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // Recupère l'annonce
  getAnnonceByID(id) {
    return api
      .get(`/annonce/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Recupère les x dernieres annonces
  getLastAnnonce(nb) {
    return api
      .get(`/annonce?limit=${nb}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Ajoute l'annonce
  addAnnonce(annonce) {
    return api
      .post("/annonce", { annonce })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Mise à jour de l'annonce
  updateAnnonce(id) {
    return api
      .put(`/annonce/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  // TODO: Suppression de l'annonce
  deleteAnnonce(id) {
    return api
      .delete(`/annonce/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}

export default new AnnonceService();
