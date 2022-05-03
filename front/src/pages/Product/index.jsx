import React from "react";

import RDV from "@components/ModalProduct";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="w-4/5 flex justify-center items-center py-44">
          <div className="w-1/2 flex justify-center items-center bg-gray-600 rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/200/300?random=1"
              alt=""
              className="h-full w-full max-h-700 object-contain"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-4/5 flex flex-col justify-center items-start">
              <h6 className="text-6xl text-left">Duplex - F6 - Paris</h6>
              <p className="text-lg mt-5 text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                nobis adipisci a quis dolorem suscipit, qui quae libero animi
                asperiores.
              </p>
              <strong className="text-xl mt-5 text-left">250000€</strong>
              <hr className="mt-5 mb-5 h-px w-full bg-black" />
              <RDV />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
