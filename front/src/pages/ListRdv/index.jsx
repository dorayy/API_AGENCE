import React from "react";

import Footer from "@components/Footer";

import Edit from "@assets/images/edit.svg";
import Delete from "@assets/images/delete.svg";

export const ListRdv = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-start pt-60 pb-10">
        <ul className="w-4/5 flex flex-col justify-center items-center">
          <li className="w-full p-4 border-b-2 border-black">
            <div className="w-full flex justify-between items-center">
              <h6 className="text-lg">Louis Poulin</h6>
              <p>Rendez-vous le : 17/05/2022</p>
              <p>Tél : 0700000000</p>
              <p>Email : louispoulin@gmail.com</p>
              <div className="flex">
                <button
                  type="button"
                  className="h-10 w-10 flex justify-center items-center rounded-2xl bg-yellow-500"
                  title="Editer"
                >
                  <img src={Edit} alt="" />
                </button>
                <button
                  type="button"
                  className="h-10 w-10 flex justify-center items-center ml-2 rounded-2xl bg-red-600"
                  title="Supprimer"
                >
                  <img src={Delete} alt="" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default ListRdv;
