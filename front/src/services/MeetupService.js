import { api } from "@utils/axios";
import qs from "qs";

class MeetupService {
  // Recupère l'utilisateur

  getMeetUpByUserId(id) {
    const token = localStorage.getItem("token").replaceAll('"', "");

    return api
      .get(`/user/${id}/meetup?apikey=123456`, {
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
  addMeetup(id, body) {
    const data = qs.stringify(body);
    return api({
      method: "post",
      url: `/annonce/${id}/meetup?apikey=123456`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

  updateMeetup(id, email, telephone, date) {
    const data = qs.stringify({
      email,
      telephone,
      date,
    });

    return api({
      method: "put",
      url: `/meetup/${id}?apikey=123456`,
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

  deleteMeetup(id) {
    return api
      .delete(`/meetup/${id}?apikey=123456`, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        return response.status;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}

export default new MeetupService();
