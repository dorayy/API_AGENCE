import React, { useState, useEffect } from "react";

import Edit from "@assets/images/edit.svg";
import Close from "@assets/images/close.svg";

const ModalEditAnnonces = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        type="button"
        className="absolute top-5 right-5 h-10 w-10 flex justify-center items-center rounded-2xl bg-yellow-500"
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
          <form className="absolute w-500 h-550 p-4 flex flex-col justify-center rounded-2xl bg-white">
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
                  disabled
                />
              </div>
            </div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Téléphone</label>
            <input
              type="text"
              name="telephone"
              placeholder="Téléphone"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Modifier l'annonces
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalEditAnnonces;
