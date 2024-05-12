import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { SessionStore } from "./SessionStore";

export const Rutas = () => {
  const { session } = SessionStore();
  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <>
      <div className={` w-10 absolute right-10 bottom-10  ${(session == "Logged" || session == "Not Logged") && " hidden"}`}>
        <div className={`loader`}></div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
