import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Provider as CooksProvider } from "./context/cooksContext";
import { Provider as MenuProvider } from "./context/menuContext";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div>
      <MenuProvider>
        <CooksProvider>
          <BrowserRouter>
            <Header setSearchTerm={setSearchTerm} value={searchTerm} />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        </CooksProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
