import React, { useEffect, useState } from "react";

import ModalEditProduct from "@components/ModalEditProduct";
import ModalDelete from "@components/ModalDelete";
import Footer from "@components/Footer";
import MeetupService from "@services/MeetupService";

export const ListRdv = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [annonces, setMeetup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUser = await MeetupService.getMeetUpByUserId(user.id);
        setMeetup(responseUser);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-start pt-60 pb-10">
        <ul className="w-4/5 flex flex-col justify-center items-center">
          {annonces.map((annnonce) => {
            return annnonce.map((meetup) => {
              let date = new Date(meetup.date);
              return (
                <li className="w-full p-4 border-b-2 border-black">
                  <div className="w-full flex justify-between items-center">
                    <h6 className="text-lg">
                      {meetup.prenom} {meetup.nom}
                    </h6>
                    <p>
                      Rendez-vous le : {date.getDate()} {date.getMonth()}{" "}
                      {date.getFullYear()} {date.getHours()}h{" "}
                      {date.getMinutes()}m {date.getSeconds()}s
                    </p>
                    <p>Tél : {meetup.telephone}</p>
                    <p>Email : {meetup.email}</p>
                    <div className="flex">
                      <ModalEditProduct data={meetup} />
                      <ModalDelete id={meetup.id} />
                    </div>
                  </div>
                </li>
              );
            });
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default ListRdv;
