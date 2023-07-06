import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Logo, Button, Sidebar } from '../layout/helper';

const Header = () => {

   const [sticky, setSticky] = useState("");
   const [showSidebar, setShowSidebar] = useState(false);

   const sidebarHandler = () => setShowSidebar(!showSidebar);

   const toTop = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'auto'
      });
   };

   const isSticky = () => {
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 250 ? "is-Sticky" : "";
      setSticky(stickyClass);
   };

   useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => window.removeEventListener("scroll", isSticky);
   }, []);

   let stickyTop = `${sticky}`;

   return (
      <header className={stickyTop}>
         <div className="container-fluid">
            <div className="header-wrapper">

               <Link to='/' className='nav-brand'>
                  <img src={Logo} width="90" alt="Vault Payments solution" />
               </Link>

               <nav aria-labelledby="Primary Navigation" className="navbar">
                  <ul className="nav-list">
                     <li className="nav-item"><Link to="../" className="nav-link" onClick={toTop}>Home</Link></li>
                     <li className="nav-item"><Link to="../about" className="nav-link" onClick={toTop}>About Us</Link></li>
                     <li className="nav-item"><Link to="../solutions" className="nav-link" onClick={toTop}>Solutions</Link></li>
                     <li className="nav-item"><Link to="../contact" className="nav-link" onClick={toTop}>Contact</Link></li>
                  </ul>

                  <Button target="contact" />
               </nav>

               <div className="hamburger-menu" onClick={sidebarHandler}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>

               <Sidebar classNm={showSidebar ? 'sidebar-menu openSidebar' : 'sidebar-menu'} handler={sidebarHandler} />

            </div>
         </div>
      </header >
   );
};

export default Header;