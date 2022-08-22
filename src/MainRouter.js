import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";

import Favorite from "./Components/Favorite/Favorite";
import Type from "./Components/Type/Type";
import AddAnime from "./Components/AddAnime/AddAnime";
import Error404 from "./Components/Error404/Error404";
import EditAnime from "./Components/EditAnime/EditAnime";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/edit/:id" element={<EditAnime />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/type" element={<Type />} />
      <Route path="/add" element={<AddAnime />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default MainRouter;
