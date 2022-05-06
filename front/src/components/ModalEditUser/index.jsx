import React, { useState } from "react";

import Close from "@assets/images/close.svg";
import Edit from "@assets/images/edit.svg";
import UserService from "@services/UserService";
import { useForm } from "react-hook-form";

const Contact = ({ user }) => {
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [roles, setRoles] = useState(user.roles);

  const { register, handleSubmit } = useForm();

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSubmit = async (formData) => {
    const data = {
      email: formData.email,
      username: formData.username,
      roles: formData.roles,
    };
    const status = await UserService.updateUser(user.id, data);
    if (status === 200) {
      toggleModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="h-10 w-10 flex justify-center items-center rounded-2xl bg-yellow-500"
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
            className="absolute w-500 h-550 p-4 flex flex-col justify-center rounded-2xl bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>

            <label>Email</label>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Username</label>
            <input
              {...register("username")}
              type="text"
              name="username"
              placeholder="Téléphone"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Rôles</label>
            <input
              {...register("roles")}
              type="text"
              name="roles"
              className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              required
            />
            <div className="flex justify-center items-center w-full">
              <button
                className="h-12 w-64 mt-5 text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Modifier un utilisateur
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
