/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Ellipse from "@assets/images/Ellipse.svg";
import Ellipse2 from "@assets/images/Ellipse2.svg";
import Footer from "@components/Footer";
import { useForm } from "react-hook-form";
import UserService from "@services/UserService";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    const status = await UserService.updatemyinfos(user.id, data);
    if (status === 200) {
      window.location.reload();
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen">
        <div className="w-4/5 flex justify-center items-center py-44">
          <img src={Ellipse2} className="absolute w-80 h-80 top-5 -left-36" />
          <img
            src={Ellipse}
            className="absolute w-90 h-90 bottom-12 right-64"
          />
          <form
            className="absolute w-full p-4 flex flex-col justify-center rounded-2xl bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-3/12 flex flex-col justify-center items-start">
              <label>Nom d'utilisateur</label>
              <input
                {...register("username")}
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nom d'utilisateur"
                className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                required
              />
              <label>Email</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                required
              />
              <label>Mot de passe</label>
              <input
                {...register("password")}
                type="text"
                name="password"
                placeholder="Mot de passe"
                className="w-full p-3 mt-2 mb-2 rounded-2xl border-2 border-blue-500"
                required
              />
              <button
                className="h-12 w-64 mt-5 m-auto text-white rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Modifier mes informations
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
