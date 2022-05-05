import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Index = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showStatus={false}
        interval={2000}
        className="w-900 p-4 mt-5 flex flex-col justify-center items-center"
      >
        {data.map((data) => (
          <div
            className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-400"
            key={data.id}
          >
            <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
              <div className="flex justify-center align-center">
                <div className="w-6/12">
                  <img
                    src={data.images}
                    alt={data.titre}
                    className="h-full w-full object-cover"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src =
                        "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
                    }}
                  />
                </div>
                <div className="w-6/12 h-400 flex justify-center items-center">
                  <div className="w-4/5 p-0 flex flex-col justify-start items-start">
                    <h6 className="text-3xl text-left first-letter:uppercase">
                      {data.titre}
                    </h6>
                    <strong className="text-xl mt-5 text-left">
                      {data.prix} €
                    </strong>
                    <hr className="mt-2 mb-2 h-px w-full bg-black" />
                    <button
                      onClick={() => {
                        navigate(`/produit/${data.id}`);
                      }}
                      className="h-12 w-64 mt-5 m-auto text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                    >
                      Voir le bien
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Index;
