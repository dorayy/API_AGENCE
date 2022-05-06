import React, { useState } from "react";

import Edit from "@assets/images/edit.svg";
import Close from "@assets/images/close.svg";
import AnnonceService from "@services/AnnonceService";
import { useForm } from "react-hook-form";

const ModalAddAnnonces = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [typedebien, setTypedebien] = useState("");
  const [typedecontrat, setTypedecontrat] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [options, setOptions] = useState([]);

  const { register, handleSubmit } = useForm();

  const addOptions = () => {
    setOptions([...options, ""]);
  };

  const onSubmit = async (formData) => {
    const data = {
      titre: formData.titre,
      prix: formData.prix,
      description: formData.description,
      images: formData.images,
      vendu: false,
      type_bien: formData.typedebien,
      type_contrat: formData.typedecontrat,
      superficie: formData.superficie,
      options: JSON.stringify({ jardin: false }),
    };
    console.log("data:", data);
    const status = await AnnonceService.addAnnonce(data);
    if (status === 200) {
      toggleModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="a text-black"
        id="addAnnonce"
        onClick={toggleModal}
      >
        AJOUTER UN BIEN
      </button>
      {modal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
            onClick={toggleModal}
          ></div>
          <form
            className="absolute w-500 h-700 p-4 flex flex-col justify-center rounded-2xl bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>
            <label>Titre</label>
            <input
              {...register("titre")}
              onChange={(e) => setTitre(e.target.value)}
              type="text"
              name="titre"
              value={titre}
              placeholder="Titre"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Prix</label>
            <input
              {...register("prix")}
              onChange={(e) => setPrix(e.target.value)}
              type="text"
              name="prix"
              value={prix}
              placeholder="Prix"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Description</label>
            <input
              {...register("description")}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              value={description}
              placeholder="Description"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            <label>Images</label>
            <input
              {...register("images")}
              onChange={(e) => setImages(e.target.value)}
              type="text"
              name="images"
              value={images}
              placeholder="Images"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />

            <label>Type de bien</label>
            <input
              {...register("typedebien")}
              onChange={(e) => setTypedebien(e.target.value)}
              type="text"
              name="typedebien"
              value={typedebien}
              placeholder="Type de bien"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />

            <label>Type de contrat</label>
            <input
              {...register("typedecontrat")}
              onChange={(e) => setTypedecontrat(e.target.value)}
              type="text"
              name="typedecontrat"
              value={typedecontrat}
              placeholder="Type de contrat"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />

            <label>Superficie</label>
            <input
              {...register("superficie")}
              onChange={(e) => setSuperficie(e.target.value)}
              type="number"
              name="Superficie"
              value={superficie}
              placeholder="Superficie"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />
            {/* <button
              onClick={addOptions}
              class="rounded-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              + Options
            </button>
            {options.map((option, key) => {
              return (
                <div key={key}>
                  <label>Superficie</label>
                  <input
                    // {...register(`${options[key]}`)}
                    // onChange={(e) => setOptions(e.target.value)}
                    type="text"
                    // value={options[key]}
                    placeholder="nom"
                    className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                    required
                  />
                </div>
              );
            })} */}

            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Ajouter l'annonce
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalAddAnnonces;
