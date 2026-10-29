import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Votacao from "./pages/Votacao.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/votacao",
    Component: Votacao,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
