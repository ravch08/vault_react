import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Solutions, Contact, Header, Footer } from "./components/layout/helper";

import './css/main.min.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='solutions' element={<Solutions />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;