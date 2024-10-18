import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import BookDetails from "../pages/bookDetails";
import PageNotFound from "../pages/pageNotFound";
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book/:id" element={<BookDetails />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
