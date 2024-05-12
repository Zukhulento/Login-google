import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Login } from "./Login.jsx";
import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./Rutas.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>
);
