import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showStatus={false}
        interval={2000}
        className="w-700 p-4 mt-5 flex flex-col justify-center items-center"
      >
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-400">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 border-l-8 border-l-blue-500 border-r-8 border-r-yellow-500">
            <div className="w-full h-400 flex flex-col justify-start items-start p-10">
              <h6 className="text-3xl text-left first-letter:uppercase">
                Arthur Dejoie
              </h6>
              <p className="mt-5">Achat d'un appartement à Marseille</p>
              <hr className="mt-10 mb-2 h-px w-full bg-black" />
              <p>
                <blockquote className="text-left italic mt-10">
                  « Très sérieux, je recommande pour vos recherches de locations
                  d’appartements. »
                </blockquote>
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-400">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 border-l-8 border-l-blue-500 border-r-8 border-r-yellow-500">
            <div className="w-full h-400 flex flex-col justify-start items-start p-10">
              <h6 className="text-3xl text-left first-letter:uppercase">
                Mélissa Lastreet
              </h6>
              <p className="mt-5">Achat d'une maison à Guyancourt</p>
              <hr className="mt-10 mb-2 h-px w-full bg-black" />
              <p>
                <blockquote className="text-left italic mt-10">
                  « Une équipe engagée avec un suivi sans faille. Je suis
                  contente de leur avoir confié mon bien. »
                </blockquote>
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-400 ">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 border-l-8 border-l-blue-500 border-r-8 border-r-yellow-500">
            <div className="w-full h-400 flex flex-col justify-start items-start p-10">
              <h6 className="text-3xl text-left first-letter:uppercase">
                François Lamaison
              </h6>
              <p className="mt-5">Location d'un appartement à Paris</p>
              <hr className="mt-10 mb-2 h-px w-full bg-black" />
              <p>
                <blockquote className="text-left italic mt-10">
                  « Accompagnement sérieux dans ma recherche, bonne réactivité
                  et disponibilité Je suis très satisfait »
                </blockquote>
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-400 ">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 border-l-8 border-l-blue-500 border-r-8 border-r-yellow-500">
            <div className="w-full h-400 flex flex-col justify-start items-start p-10">
              <h6 className="text-3xl text-left first-letter:uppercase">
                Anthony Sophie
              </h6>
              <p className="mt-5">Location d'une maison à Brest</p>
              <hr className="mt-10 mb-2 h-px w-full bg-black" />
              <p>
                <blockquote className="text-left italic mt-10">
                  « Très sérieux et disponible. Malgré le contexte sanitaire,
                  nous avons réussi à vendre notre bien assez rapidement et dans
                  de bonnes conditions. »
                </blockquote>
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Index;
