import { api } from "@utils/axios";
import qs from "qs";
class AnnonceService {
  // Recupère toute les annonces
  getAllAnnonce() {
    return api
      .get("/annonce?apikey=123456")
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
      .get(`/annonce/${id}?apikey=123456`)
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
      .get(`/annonce?limit=${nb}&apikey=123456`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  addAnnonce(body) {
    const data = qs.stringify(body);
    console.log("data:", data);
    return api({
      method: "post",
      url: `/annonce?apikey=123456`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        token: JSON.parse(localStorage.getItem("token")),
      },
      data,
    })
      .then((response) => {
        console.log("response:", response.data);
        return response.status;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
  updateAnnonce(id, body) {
    const data = qs.stringify(body);

    console.log(data);
    return api({
      method: "put",
      url: `/annonce/${id}/update?apikey=123456`,
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
  // TODO: Suppression de l'annonce
  deleteAnnonce(id) {
    return api
      .delete(`/annonce/${id}?apikey=123456`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.status;
      });
  }

  getEmailAgentByAnnonce(id) {
    return api
      .get(`/annonce/${id}/emailagent?apikey=123456`)
      .then((response) => {
        const { email } = response.data[0];
        return email;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}

export default new AnnonceService();
