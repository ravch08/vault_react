import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Solutions, Contact, Header, Footer, Page404 } from "./components/layout/helper";

import './sass/main.scss';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() =>
    window.scrollTo({ top: 0, behavior: 'smooth' }), [location.pathname]);

  return children;
};

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='solutions' element={<Solutions />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
};

export default App;