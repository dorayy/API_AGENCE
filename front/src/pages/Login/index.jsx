import React from "react";

import Footer from "@components/Footer";

import Login from "@assets/images/login.svg";

const index = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-6/12 h-full flex justify-end items-center bg-gray-200">
          <div className="w-4/5 flex flex-col justify-center items-start">
            <h3 className="text-6xl font-bold text-left">Connectez-vous</h3>
            <h5 className="mt-5 mb-16 text-4xl text-left">à votre compte</h5>
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              className="h-12 w-96 p-3 mt-2 mb-5 rounded-2xl border-2 border-blue-500"
              type="email"
              required
            />
            <label>Mot de passe</label>
            <input
              placeholder="Mot de passe"
              className="h-12 w-96 p-3 mt-2 mb-5 rounded-2xl border-2 border-blue-500"
              name="password"
              type="password"
              required
            />
            <button className="h-12 w-96 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50">
              Connexion
            </button>
          </div>
        </div>
        <div className="w-6/12 h-full flex justify-center items-center">
          <img
            src={Login}
            className="h-full w-full flex justify-center items-center"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
