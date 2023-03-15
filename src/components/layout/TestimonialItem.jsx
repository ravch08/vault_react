import React from 'react';
import Rating from './Rating';

const TestimonialItem = (props) => {

   return (
      <div className="testimonial-item" >
         <figure><img src={props.imgSrc} alt={props.user} /></figure>
         <h3>{props.user}</h3>
         <h4>{props.designation}</h4>
         <p>{props.description}</p>
         <Rating />
      </div >
   );
};

export default TestimonialItem;