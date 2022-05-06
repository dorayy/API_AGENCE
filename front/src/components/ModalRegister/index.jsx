import React from "react";
import { useNavigate } from "react-router-dom";

import Close from "@assets/images/close.svg";

const ModalRegister = ({ modal, setModal }) => {
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClose = () => {
    console.log("close");
    toggleModal();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      {modal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
            onClick={handleClose}
          ></div>
          <div className="absolute w-500 h-300 p-4 flex flex-col justify-center rounded-2xl bg-white">
            <button className="absolute top-2 right-2" onClick={handleClose}>
              <img src={Close} alt="Close" />
            </button>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h6 className="text-xl">
                Vous avez bien créé un nouveau compte, cliquez sur fermer pour
                être redirigé vers la page de d'Acceuil.
              </h6>
              <div className="mt-16 flex justify-between items-center">
                <button
                  className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                  type="button"
                  onClick={handleClose}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalRegister;
