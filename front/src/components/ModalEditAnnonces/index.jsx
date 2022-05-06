import React, { useState } from "react";

import Edit from "@assets/images/edit.svg";
import Close from "@assets/images/close.svg";
import AnnonceService from "@services/AnnonceService";
import { useForm } from "react-hook-form";

const ModalEditAnnonces = ({ annonce }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [titre, setTitre] = useState(annonce.titre);
  const [prix, setPrix] = useState(annonce.prix);
  const [description, setDescription] = useState(annonce.description);
  const [images, setImages] = useState(annonce.images);
  const [vendu, setVendu] = useState(annonce.vendu);
  const [typedebien, setTypedebien] = useState(annonce.type_bien);
  const [typedecontrat, setTypedecontrat] = useState(annonce.type_contrat);
  const [superficie, setSuperficie] = useState(annonce.superficie);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const data = {
      titre: formData.titre,
      prix: formData.prix,
      description: formData.description,
      images: formData.images,
      vendu: formData.vendu,
      type_bien: formData.typedebien,
      type_contrat: formData.typedecontrat,
      superficie: formData.superficie,
    };
    const status = await AnnonceService.updateAnnonce(annonce.id, data);
    if (status === 200) {
      toggleModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="absolute top-5 right-5 h-10 w-10 flex justify-center items-center rounded-2xl bg-yellow-500"
        title="Editer"
        onClick={toggleModal}
      >
        <img src={Edit} alt="" />
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
              placeholder="prix"
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
              placeholder="typedebien"
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
              placeholder="typedecontrat"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />

            <label>Superficie</label>
            <input
              {...register("superficie")}
              onChange={(e) => setSuperficie(e.target.value)}
              type="number"
              name="superficie"
              value={superficie}
              placeholder="superficie"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              required
            />

            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                {...register("vendu")}
                onChange={(e) => setVendu(e.target.value)}
                className="mr-2 leading-tight"
                type="checkbox"
                name="vendu"
                value={vendu}
              />
              <span className="text-sm">Vendu</span>
            </label>
            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Modifier l'annonce
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalEditAnnonces;
