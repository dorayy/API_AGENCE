import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Close from "@assets/images/close.svg";

const Result = () => {
  return (
    <p className="text-center text-lime-500 mb-5">
      Votre message a bien été envoyé !
    </p>
  );
};

const Contact = () => {
  const [modal, setModal] = useState(false);

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "agency_mail",
      "agency_mail",
      e.target,
      "user_4pZtHgAYvI4HpQAguAQGD"
    );

    e.target.reset();

    showResult(true);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
        onClick={toggleModal}
      >
        Prendre rendez-vous
      </button>
      {modal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
          id="modal*"
        >
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
            onClick={toggleModal}
          ></div>
          <form
            onSubmit={sendEmail}
            className="absolute w-500 h-550 p-4 flex flex-col justify-center rounded-2xl bg-white"
          >
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>
            <div>{result ? <Result /> : null}</div>
            <label>NOM Prénom</label>
            <input
              type="text"
              name="fullName"
              placeholder="Nom Prénom"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Objet</label>
            <input
              type="text"
              name="object"
              placeholder="Objet"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-2/6 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
