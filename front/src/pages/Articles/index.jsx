import React from "react";
import { useNavigate } from "react-router-dom";

import FilterArticles from "@components/FilterArticles";
import Footer from "@components/Footer";

const Articles = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center pt-36 pb-10">
        <div className="w-4/5 flex justify-center items-center">
          <FilterArticles />
        </div>
        <div className="mt-10 w-4/5 flex justify-center items-center">
          <div className="w-full flex flex-wrap gap-5">
            <div className="w-32 bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
              <div className="flex justify-center align-center">
                <div className="w-6/12 h-300">
                  <img
                    src="https://picsum.photos/200/300?random=1"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-6/12 h-300 flex justify-center items-center">
                  <div className="w-4/5 p-0 flex flex-col justify-start items-start">
                    <h6 className="text-3xl text-left">Duplex - F6 - Paris</h6>
                    <strong className="text-xl mt-5 text-left">250000€</strong>
                    <hr className="mt-2 mb-2 h-px w-full bg-black" />
                    <button
                      onClick={() => {
                        navigate("/produit");
                      }}
                      className="h-12 w-full mt-5 m-auto text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                    >
                      Voir le bien
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
