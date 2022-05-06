import React, { useState } from "react";

import Close from "@assets/images/close.svg";
import Edit from "@assets/images/edit.svg";
import MeetupService from "@services/MeetupService";
import { useForm } from "react-hook-form";

const Contact = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState(data.prenom);
  const [lastName, setlastName] = useState(data.nom);
  const [email, setEmail] = useState(data.email);
  const [telephone, setTelephone] = useState(data.telephone);
  const [date, setDate] = useState(false);

  const { register, handleSubmit } = useForm();

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSubmit = async (formData) => {
    const date = new Date(formData.date).getTime() / 1000;

    const status = await MeetupService.updateMeetup(
      data.id,
      formData.email,
      formData.telephone,
      date
    );
    if (status === 200) {
      toggleModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="h-10 w-10 flex justify-center items-center rounded-2xl bg-yellow-500"
        title="Editer"
        onClick={toggleModal}
      >
        <img src={Edit} alt="" />
      </button>
      {modal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
            onClick={toggleModal}
          ></div>
          <form
            className="absolute w-500 h-550 p-4 flex flex-col justify-center rounded-2xl bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col items-start w-48">
                <label>NOM</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                  value={lastName}
                  disabled
                />
              </div>
              <div className="flex flex-col items-start w-48">
                <label>Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                  value={firstName}
                  disabled
                />
              </div>
            </div>
            <label>Email</label>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Téléphone</label>
            <input
              {...register("telephone")}
              type="text"
              name="telephone"
              placeholder="Téléphone"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
            <label>Date</label>
            <input
              {...register("date")}
              type="date"
              name="date"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Modifier le rendez-vous
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
