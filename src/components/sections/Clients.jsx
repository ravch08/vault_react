import React from 'react';

import Client1 from '../../assets/payment-solutions-logo-1.webp';
import Client2 from '../../assets/payment-solutions-logo-2.webp';
import Client3 from '../../assets/payment-solutions-logo-3.webp';
import Client4 from '../../assets/payment-solutions-logo-4.webp';
import Client5 from '../../assets/payment-solutions-logo-5.webp';
import Client6 from '../../assets/payment-solutions-logo-6.webp';

const Clients = () => {

   return (
      <section className="clients" aria-labelledby="Our Client">
         <div className="container">

            <div className="heading">
               <span>Trusted by world’s leading company </span>
            </div>

            <div className="clients-wrapper">
               <figure><img src={Client1} width="150" alt="payment-solutions-logo-1" />
               </figure>
               <figure><img src={Client2} width="150" alt="payment-solutions-logo-2" />
               </figure>
               <figure><img src={Client3} width="150" alt="payment-solutions-logo-3" />
               </figure>
               <figure><img src={Client4} width="150" alt="payment-solutions-logo-4" />
               </figure>
               <figure><img src={Client5} width="150" alt="payment-solutions-logo-5" />
               </figure>
               <figure><img src={Client6} width="150" alt="payment-solutions-logo-6" />
               </figure>
            </div>
         </div>
      </section>
   );
};

export default Clients;