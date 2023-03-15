import React from 'react';

const FeatureItem = (props) => {

   return (
      <div className="feature-item">
         {props.svg}
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </div>
   );
};

export default FeatureItem;