import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {

   const toTop = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'auto'
      });
   };

   return (
      <Link to={props.target} className="btn-primary" onClick={toTop}>Get Started</Link>
   );
};

export default Button;