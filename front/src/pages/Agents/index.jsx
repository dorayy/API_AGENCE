import React, { useEffect, useState } from "react";

import ModalEditUser from "@components/ModalEditUser";
import ModalDeleteUser from "@components/ModalDeleteUser";
import Footer from "@components/Footer";
import UserService from "@services/UserService";

export const Agents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUser = await UserService.getAllUser();
        setUsers(responseUser);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-start pt-60 pb-10">
        <ul className="w-4/5 flex flex-col justify-center items-center">
          {users.map((user, key) => {
            return (
              <li className="w-full p-4 border-b-2 border-black" key={key}>
                <div className="w-full flex justify-between items-center">
                  <h6 className="text-lg">{user.username}</h6>

                  <p> {user.roles === 1 ? "Administrateur" : "Agent"}</p>
                  <p> {user.email}</p>
                  {
                    <div className="flex">
                      <ModalEditUser user={user} />
                      <ModalDeleteUser id={user.id} />
                    </div>
                  }
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Agents;
