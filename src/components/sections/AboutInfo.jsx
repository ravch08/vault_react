import React from 'react';
import Rating from '../layout/Rating';
import Customer from '../../assets/payment-solutions-customer.webp';

const AboutInfo = () => {

   return (
      <section className="aboutUs" aria-labelledby="About Vault">
         <div className="container">
            <div className="about-wrapper">

               <div className="about-image">
                  <img src={Customer} alt="customer" />

                  <div className="customer-quote">
                     <p>We’re a leading payment gatway. Our support helped our client to solve their payment gatway.</p>

                     <div className="customer-info">
                        <strong>Mark Quins. CEO vault</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
                           <path
                              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                        </svg>
                     </div>
                  </div>
               </div>

               <div className="about-content">
                  <h2>We’ve Been <br /> Helping Customer <br /> Globally.</h2>
                  <h3>Who we are?</h3>
                  <p>Vault is the world’s go-to partner for digital commerce, everywhere. From borderless payments to boundless growth, Payoneer promises any business, in any market, the technology, connections and confidence to participate and flourish in the new global economy
                  </p>
                  <span><em>Avg 4.8 rating</em> makes us world best.</span>

                  <Rating />
               </div>
            </div>

         </div >
      </section >

   );
};

export default AboutInfo;