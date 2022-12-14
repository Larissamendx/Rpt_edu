import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import GRI from "./pages/GRI/GRI";
import VRF from "./pages/IFRS/IFRS";
import Relatos from "./pages/Relatos/Relatos";

export function Router() {
  return(
    <Routes>
      <Route path="/cursos/" element={<Home />}/>
      <Route path="/cursos/gri" element={<GRI />}/>
      <Route path="/cursos/ifrs" element={<VRF />}/>
      <Route path="/cursos/relatos" element={<Relatos />}/>
    </Routes>
  )
}