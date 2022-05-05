import React from "react";

import ModalEditProduct from "@components/ModalEditProduct";
import ModalDelete from "@components/ModalDelete";
import Footer from "@components/Footer";

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
                <ModalEditProduct />
                <ModalDelete />
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
