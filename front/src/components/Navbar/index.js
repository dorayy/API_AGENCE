import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Link from "./Link";
import Contact from "@components/ModalMail";
import "./style.css";

export default function NavbarCryptolyse({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="fixed z-50 w-full mt-5 m-auto flex items-center justify-center">
        <nav className="w-4/5">
          <div className="w-full mx-auto p-4 sm:px-6 lg:px-8 rounded-2xl bg-white shadow-lg shadow-blue-500/50">
            <div className="flex items-center h-16 w-full">
              <div className="flex justify-between items-center w-full">
                <NavLink to="/" className="flex items-center">
                  <p className="text-black font-origintech text-2xl">AGENCE</p>
                </NavLink>
                <div className="hidden w-full md:block">
                  <div className="flex justify-between items-center">
                    <div className="ml-16 flex items-center">
                      <Link
                        label="ACCUEIL"
                        url="/"
                        className="text-black p-2"
                      />
                      <Link
                        label="LES BIENS"
                        url="/articles"
                        className="text-black p-2"
                      />
                      {token && (
                        <Link
                          label="MES RENDEZ-VOUS"
                          url="/liste-rdv"
                          className="text-black p-2"
                        />
                      )}
                      {user?.roles === 1 && (
                        <Link
                          label="MES AGENTS"
                          url="/agents"
                          className="text-black p-2"
                        />
                      )}
                    </div>
                    <div className="flex items-center relative">
                      {!token ? (
                        <>
                          <Contact />
                          <Link
                            label="CONNEXION"
                            url="/connexion"
                            className="text-black p-2"
                          />
                        </>
                      ) : (
                        <div className="dropdown">
                          <button className="dropbtn">MON COMPTE</button>
                          <div className="dropdown-content shadow-lg shadow-blue-500/50">
                            {user?.roles === 1 && (
                              <button className="a">
                                <Link
                                  label="CRÉER UN UTILISATEUR"
                                  url="/inscription"
                                  className="text-black"
                                />
                              </button>
                            )}
                            <button className="a">
                              <Link
                                label="AJOUTER UN BIEN"
                                url="/"
                                className="text-black"
                              />
                            </button>
                            <button className="a">
                              <Link
                                label="MES INFORMATIONS"
                                url="/profil"
                                className="text-black"
                              />
                            </button>
                            <button
                              onClick={handleLogout}
                              className="a text-black"
                              id="logout"
                            >
                              DECONNEXION
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  label="ACCUEIL"
                  url="/"
                  classNom="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                />
              </div>
            </div>
          </Transition>
        </nav>
      </div>
      <main className="background-cryptolyse-base">
        <div className="mx-auto">{children}</div>
      </main>
    </>
  );
}
