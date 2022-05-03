import React from "react";

const index = () => {
  return (
    <div className="w-4/5">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <select className=" w-32 p-3 rounded-2xl border-2 border-blue-500 text-gray-500">
            <option className="text-gray-500" selected>
              Type de bien
            </option>
            <option value="Maison" className="text-black">
              Maison
            </option>
            <option value="Appartement" className="text-black">
              Appartement
            </option>
          </select>
          <select className=" w-32 p-3 rounded-2xl border-2 border-blue-500 text-gray-500">
            <option className="text-gray-500" selected>
              Type de contrat
            </option>
            <option value="Achat" className="text-black">
              Achat
            </option>
            <option value="Location" className="text-black">
              Location
            </option>
          </select>
          <input
            type="number"
            min="100"
            max="10000000"
            placeholder="Budget en €"
            className="w-32 p-3 rounded-2xl border-2 border-blue-500"
          />
        </div>
        <button className="h-12 w-2/6 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50">
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default index;
