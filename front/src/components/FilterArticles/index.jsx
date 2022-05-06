import React from "react";

const Filter = ({
  Bien = "",
  Contrat = "",
  Budget = 0,
  onChangeBien = () => {},
  onChangeContrat = () => {},
  onChangeBudget = () => {},
}) => {
  const typeBien = ["Maison", "Appartement"];
  const typeContrat = ["Achat", "Location"];

  const AddBien = typeBien.map((Add) => Add);
  const AddContrat = typeContrat.map((Add) => Add);

  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl text-blue-500 mb-5">Filtrez les annonces</h2>
        <div className="w-full flex justify-between items-center">
          <select
            onChange={(e) => onChangeBien(e)}
            className="w-24 p-3 rounded-2xl border-2 border-blue-500 text-gray-500 mt-6"
            value={Bien}
          >
            <option className="text-gray-500" key="default">
              Type de Bien
            </option>
            {AddBien.map((bien, key) => (
              <option className="text-black" value={bien} key={key}>
                {bien}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => onChangeContrat(e)}
            className=" w-24 p-3 rounded-2xl border-2 border-blue-500 text-gray-500 mt-6"
            value={Contrat}
          >
            <option className="text-gray-500" key="default1">
              Type de Contrat
            </option>
            {AddContrat.map((contrat, key) => (
              <option className="text-black" value={contrat} key={key}>
                {contrat}
              </option>
            ))}
          </select>

          <div className="w-24 flex flex-col justify-center items-center">
            <label>Budget en €</label>
            <input
              type="number"
              min="100"
              max="10000000"
              placeholder="Budget en €"
              className="w-full p-3 rounded-2xl border-2 border-blue-500"
              onChange={onChangeBudget}
              value={Budget}
            />
          </div>

          <div className="w-24 flex flex-col justify-center items-center">
            <label>Superficie en m²</label>
            <input
              type="number"
              min="12"
              max="5000"
              placeholder="Superficie en m²"
              className="w-full p-3 rounded-2xl border-2 border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
