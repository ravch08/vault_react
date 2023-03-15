import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import './css/main.min.css';

// Sticky scroll
// https://stackoverflow.com/questions/62970456/how-to-create-sticky-headers-on-scroll-with-react

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