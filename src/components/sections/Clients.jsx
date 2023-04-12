import React from 'react';

import { Client1, Client2, Client3, Client4, Client5, Client6 } from "../layout/helper";

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