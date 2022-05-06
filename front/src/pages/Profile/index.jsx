import React from "react";

import Ellipse from "@assets/images/Ellipse.svg";
import Ellipse2 from "@assets/images/Ellipse2.svg";

import Footer from "@components/Footer";

const Profile = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen">
        <div className="w-4/5 flex justify-center items-center py-44">
          <img src={Ellipse2} className="absolute w-80 h-80 top-5 -left-36" />
          <img
            src={Ellipse}
            className="absolute w-90 h-90 bottom-12 right-64"
          />
          <div className="w-3/12 flex flex-col justify-center items-start">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
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
            <label>Mot de passe</label>
            <input
              type="text"
              name="password"
              placeholder="Mot de passe"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <button
              className="h-12 w-64 mt-5 m-auto text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
              type="submit"
            >
              Modifier mes informations
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
