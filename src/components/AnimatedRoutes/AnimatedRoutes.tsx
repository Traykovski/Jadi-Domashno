import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HowItWorksPage from "../../containers/HowItWorksPage/HowItWorksPage";
import CookDetailsPage from "../../containers/CookDetailsPage/CookDetailsPage";
import MenuPage from "../../containers/MenuPage/MenuPage";
import ErrorPage from "../Error/ErrorPage";
import { AnimatePresence } from "framer-motion";
import HomePage from "../../containers/HomePage/HomePage";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/cook-details/:id" element={<CookDetailsPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
