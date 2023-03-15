import React from 'react';
import Button from '../layout/Button';

import VirtualCard1 from '../../assets/payment-solutions-spending-breakdown-card.webp';
import VirtualCard2 from '../../assets/payment-solutions-balance-money-card.webp';
import VirtualCard3 from '../../assets/payment-solutions-received-money-card.webp';

const VirtualCards = () => {

   return (
      <section className="virtual-cards" aria-labelledby="Virtual Cards With Built-In Rules">
         <div className="container">
            <div className="virtual-card-wrapper">

               <div className="virtual-card-content">
                  <h2>Let Players Use Virtual Cards With Built-In Rules.</h2>
                  <p>Encourage foster purchasing by allowing each employee to buy personal items through a
                     company-issued credit card in an efficient, secure manner.
                  </p>
                  <Button target="../contact" />
               </div>

               <div className="virtual-card-images">
                  <img className="virtual-img-1"
                     src={VirtualCard1}
                     alt="payment-solutions-spending-breakdown-card" />

                  <div className="virtual-img">
                     <img className="virtual-img-2"
                        src={VirtualCard2}
                        alt="payment-solutions-balance-money-card" />

                     <img className="virtual-img-3"
                        src={VirtualCard3}
                        alt="payment-solutions-received-money-card" />
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default VirtualCards;