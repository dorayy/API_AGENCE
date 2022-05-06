import React, { useState } from "react";

import Close from "@assets/images/close.svg";
import Delete from "@assets/images/delete.svg";
import UserService from "@services/UserService";

const Contact = ({ id }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = async () => {
    const status = await UserService.deleteUser(id);
    if (status === 200) {
      toggleModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="h-10 w-10 flex justify-center items-center ml-2 rounded-2xl bg-red-600"
        title="Supprimer"
        onClick={toggleModal}
      >
        <img src={Delete} alt="" />
      </button>
      {modal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
            onClick={toggleModal}
          ></div>
          <div className="absolute w-500 h-300 p-4 flex flex-col justify-center rounded-2xl bg-white">
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h6 className="text-xl">
                Êtes-vous sûr de vouloir supprimer cette utilisateur ?
              </h6>
              <div className="mt-16 flex justify-between items-center">
                <button type="button" onClick={toggleModal}>
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="ml-5 bg-red-600 px-4 py-2 rounded-2xl text-white"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
