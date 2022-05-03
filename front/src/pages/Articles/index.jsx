import React from "react";

import FilterArticles from "@components/FilterArticles";
import Footer from "@components/Footer";

const Articles = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-36">
        <div className="w-4/5 flex justify-center items-center">
          <FilterArticles />
        </div>
        <div className="mt-10 w-4/5 flex justify-center items-center">
          <div className="w-full flex flex-wrap gap-5">
            <div className="w-32 h-80 bg-white rounded-2xl shadow-lg shadow-blue-500/50 overflow-hidden">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
