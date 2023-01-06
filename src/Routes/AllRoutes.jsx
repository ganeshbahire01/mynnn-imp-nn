import React from "react";
import { Route, Routes } from "react-router-dom";
import All from "../Components/All";
import Css from "../Components/Css";
import Html from "../Components/Html";
import Javascipt from "../Components/Javascipt";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/HTML" element={<Html />} />
        <Route path="/CSS" element={<Css />} />
        <Route path="/JAVASCRIPTS" element={<Javascipt />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
