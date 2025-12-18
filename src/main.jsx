import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import "./index.css";

import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";


  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </StrictMode>
  );
  

