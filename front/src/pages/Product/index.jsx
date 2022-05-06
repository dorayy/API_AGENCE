import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ModalProduct from "@components/ModalProduct";
import Footer from "@components/Footer";

import AnnonceService from "@services/AnnonceService";

const Home = () => {
  const [annonce, setAnnonce] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnonceService.getAnnonceByID(slug);
        setAnnonce(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="w-4/5 flex justify-center items-center py-44">
          <div className="w-1/2 flex justify-center items-center bg-gray-600 rounded-2xl overflow-hidden">
            <img
              src={annonce.images}
              alt={annonce.titre}
              className="h-full w-full max-h-700 object-contain"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-4/5 flex flex-col justify-center items-start">
              <h6 className="text-6xl text-left first-letter:uppercase">
                {annonce.titre}
              </h6>
              <p className="text-lg mt-5 text-left first-letter:uppercase">
                {annonce.description}
              </p>
              <strong className="text-xl mt-5 text-left">
                {annonce.prix} €
              </strong>
              <p className="text-lg mt-5 text-left first-letter:uppercase">
                Type de bien : {annonce.type_bien}
              </p>
              <p className="text-lg mt-5 text-left first-letter:uppercase">
                Type de contrat : {annonce.type_contrat}
              </p>

              <hr className="mt-5 mb-5 h-px w-full bg-black" />
              <ModalProduct idAnnonce={annonce.id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
