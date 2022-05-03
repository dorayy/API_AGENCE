import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const index = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showStatus={false}
        interval={2000}
        className="w-2/5 p-4 mt-5 flex flex-col justify-center align-center"
      >
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-80">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
            <div className="flex justify-center align-center">
              <div className="w-6/12">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-80">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
            <div className="flex justify-center align-center">
              <div className="w-6/12">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-80">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
            <div className="flex justify-center align-center">
              <div className="w-6/12">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-80">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
            <div className="flex justify-center align-center">
              <div className="w-6/12">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 mb-10 flex justify-center align-center w-95 h-80">
          <div className="w-full bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
            <div className="flex justify-center align-center">
              <div className="w-6/12">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default index;
