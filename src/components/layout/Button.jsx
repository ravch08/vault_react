import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {

   return (
      <Link to={props.target} className="btn-primary" >Get Started</Link>
   );
};

export default Button;