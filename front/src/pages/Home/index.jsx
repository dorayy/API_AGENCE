import React from "react";

import Carousel from "@components/Carousel";
import Footer from "@components/Footer";

import HomeBanner from "@assets/images/main.png";
import Character from "@assets/images/character.png";
import Ellipse from "@assets/images/Ellipse.svg";
import Ellipse2 from "@assets/images/Ellipse2.svg";

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
              <button className="h-12 w-2/6 mt-10 text-black rounded-2xl bg-white shadow-lg shadow-gray-600">
                Découvrir
              </button>
            </div>
            <div className="w-6/12"></div>
          </div>
          <div className="w-4/5 flex justify-center items-center mt-32">
            <div className="w-4/5 h-60 rounded-2xl shadow-xl shadow-blue-500/50 bg-white p-4">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h6 className="mb-5 text-lg font-semibold text-black">
                  Affinez votre recherche
                </h6>
                <div className="w-full flex justify-between items-center">
                  <select className=" w-32 p-3 rounded-2xl border-2 border-blue-500 text-gray-500">
                    <option className="text-gray-500" selected>
                      Type de bien
                    </option>
                    <option value="Maison" className="text-black">
                      Maison
                    </option>
                    <option value="Appartement" className="text-black">
                      Appartement
                    </option>
                  </select>
                  <select className=" w-32 p-3 rounded-2xl border-2 border-blue-500 text-gray-500">
                    <option className="text-gray-500" selected>
                      Type de contrat
                    </option>
                    <option value="Achat" className="text-black">
                      Achat
                    </option>
                    <option value="Location" className="text-black">
                      Location
                    </option>
                  </select>
                  <input
                    type="number"
                    min="100"
                    max="10000000"
                    placeholder="Budget en €"
                    className=" w-32 p-3 rounded-2xl border-2 border-blue-500"
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
      <div className="relative flex flex-col justify-center items-center w-full">
        <h2 className="text-center text-5xl font-semibold mt-5 mb-5">
          Les 5 derniers biens ajoutés
        </h2>
        <img src={Ellipse2} className="absolute w-80 h-80 top-20 -left-24" />
        <img src={Ellipse} className="absolute w-90 h-90 bottom-24 right-64" />
        <Carousel />
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
      <div className="py-10 flex flex-col justify-center items-center w-full bg-gray-200">
        <h3 className="text-center text-5xl font-semibold mt-5 mb-5">
          Qui sommes-nous ?
        </h3>
        <p className="w-6/12 text-lg text-center">
          Agence immobilière familiale et indépendante, l’Agence implantée au
          cœur de la ville et l’agence Sologne implantée au sud Loire à La Ferté
          Saint Aubin mettent à votre disposition leur 50 ans d’expérience dans
          l’immobilier ainsi que leur notoriété. Adhérente de la FNAIM, avec un
          visuel très important de vitrines en cœur de ville aussi bien à
          Orléans qu’à La Ferté Saint Aubin. <b>Louis</b>, <b>Maxime</b>,
          <b> Doray</b> et <b>Esteban </b>
          ainsi que toute leur équipe sont à votre disposition et à votre écoute
          pour répondre à vos attentes et vous conseiller dans tous vos projets
          immobiliers.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
