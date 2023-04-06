import React from 'react';

const PageBanner = (props) => {
   return (
      <section className="page-banner heroSection" aria-labelledby="About Us">
         <div className="container">
            <div className="heading">
               <h1> {props.bannerHeading} </h1>
            </div>
         </div>
      </section>
   );
};

export default PageBanner;