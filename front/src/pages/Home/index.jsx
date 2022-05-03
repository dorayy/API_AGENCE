import React from "react";
import HomeBanner from "@assets/images/main.svg";
import Character from "@assets/images/character.png";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative flex justify-center w-full">
        <img
          className="absolute w-full -z-50"
          src={HomeBanner}
          alt="Home Banner"
        />
        <div className="w-4/5 flex flex-col justify-center items-center py-56 z-40">
          <div className="w-full flex justify-center items-center">
            <div className="w-6/12 flex flex-col justify-center items-start text-white">
              <h1 className="text-7xl font-semibold">Bienvenue chez vous !</h1>
              <p className="mt-5 text-lg w-4/5">
                Nous sommes fière de vous acceuillir parmis nous, faites comme
                chez vous, pour trouver votre chez vous.
              </p>
            </div>
            <div className="w-6/12"></div>
          </div>
          <div className="w-4/5 flex justify-center items-center mt-36">
            <div className="w-4/5 h-60 rounded-2xl shadow-xl shadow-blue-500/50 bg-white p-4">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h6 className="mb-5 text-lg font-semibold text-black">
                  Affinez votre recherche
                </h6>
                <div className="w-full flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Localisation"
                    className="h-12 w-32 p-4 rounded-2xl border-2 border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Type de bien"
                    className="h-12 w-32 p-4 rounded-2xl border-2 border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Budget en €"
                    className="h-12 w-32 p-4 rounded-2xl border-2 border-blue-500"
                  />
                </div>
                <button className="h-12 w-2/6 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-4/5 flex justify-center items-center -mt-20 mb-20">
          <div className="w-6/12 flex flex-col justify-center">
            <h2 className="text-6xl font-semibold">
              Vous êtes ici comme chez vous !
            </h2>
            <p className="mt-5 text-lg w-4/5">
              Nous sommes fière de vous acceuillir parmis nous, faites comme
              chez vous, pour trouver votre chez vous.
            </p>
            <button className="h-12 w-2/6 mt-10 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50">
              Découvrir
            </button>
          </div>
          <div className="w-6/12 flex justify-center">
            <img className="w-full" src={Character} alt="Character" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
