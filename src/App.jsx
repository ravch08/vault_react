import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Page404,
  Solutions,
} from "./components/utils/helper";

import "./styles/main.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [location.pathname]
  );

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
