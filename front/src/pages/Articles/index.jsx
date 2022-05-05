import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FilterArticles from "@components/FilterArticles";
import Footer from "@components/Footer";
import AnnonceService from "@services/AnnonceService";

const Articles = () => {
  const [annonces, setAnnonces] = useState([]);
  const [typeBien, setTypeBien] = useState("");
  const [typeContrat, setTypeContrat] = useState("");
  const [budget, setBudget] = useState(0);

  const navigate = useNavigate();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnonceService.getAllAnnonce();
        setAnnonces(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (urlParams.get("Bien")) {
      setTypeBien(urlParams.get("Bien"));
    }
    if (urlParams.get("Contrat")) {
      setTypeContrat(urlParams.get("Contrat"));
    }
    if (urlParams.get("Budget") && urlParams.get("Budget")) {
      setBudget(urlParams.get("Budget"));
    }
    fetchData();
  }, []);

  const handleTypeBienChange = (e) => {
    setTypeBien(e.target.value);
  };

  const handleTypeContratChange = (e) => {
    setTypeContrat(e.target.value);
  };

  const handleChangeBudget = (e) => {
    setBudget(e.target.value);
  };

  console.log(budget)

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-10">
        <div className="w-4/5 flex justify-center items-center">
          <FilterArticles
            Bien={typeBien}
            Contrat={typeContrat}
            Budget={budget}
            onChangeBien={handleTypeBienChange}
            onChangeContrat={handleTypeContratChange}
            onChangeBudget={handleChangeBudget}
          />
        </div>
        <div className="mt-10 w-4/5 pb-10 flex justify-center items-center">
          <div className="w-full flex flex-wrap gap-5 m-auto">
            {annonces
              .filter((data) => {
                if (typeBien === "Type de Bien") {
                  return data;
                } else if (
                  data.type_bien.toLowerCase().includes(typeBien.toLowerCase())
                ) {
                  return data;
                }
              })
              .filter((data) => {
                if (typeContrat === "Type de Contrat") {
                  return data;
                } else if (
                  data.type_contrat
                    .toLowerCase()
                    .includes(typeContrat.toLowerCase())
                ) {
                  return data;
                }
              })
              .filter((data) => {
                if (budget === 0) {
                  return data;
                } else if (
                  data.prix <= budget
                ) {
                  return data;
                }
              })
              .map((annonce) => (
                <div className="w-32 mt-5 bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
                  <div className="flex justify-center align-center">
                    <div className="w-6/12 h-300">
                      <img
                        src={annonce.images}
                        alt={annonce.titre}
                        className="h-full w-full object-cover"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
                        }}
                      />
                    </div>
                    <div className="w-6/12 h-300 flex justify-center items-center">
                      <div className="w-4/5 p-0 flex flex-col justify-start items-start">
                        <h6 className="text-xl text-left first-letter:uppercase">
                          {annonce.titre}
                        </h6>
                        <strong className="text-md mt-5 text-left">
                          {annonce.prix}€
                        </strong>
                        <hr className="mt-2 mb-2 h-px w-full bg-black" />
                        <button
                          onClick={() => {
                            navigate(`/produit/${annonce.id}`);
                          }}
                          className="h-12 w-full mt-5 m-auto text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                        >
                          Voir le bien
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
