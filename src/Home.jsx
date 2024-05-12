import React from "react";
import { UserStore } from "./UserStore";

export const Home = () => {
  const { user } = UserStore();
  console.log(user);
  return (
    <div className="bg-yellow-50 w-1/3 flex flex-col max-h-56 m-auto shadow-xl mt-4 p-4">
      <p className="m-auto"> Bienvenido {user.name}</p>
      <img src={user.photo} alt={user.name} className="w-fit m-auto" />
    </div>
  );
};
