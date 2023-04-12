import React from 'react';

import { whyItems } from '../layout/Data';
import { WhyItem } from '../layout/helper';

const WhyVault = () => {

   const whyItemsList = whyItems.map(whyitem => <WhyItem
      key={whyitem.id}
      id={whyitem.id}
      title={whyitem.title}
      description={whyitem.description}
   />);

   return (
      <section className="whyVault" aria-labelledby="Why use Vault Bank">
         <div className="container">
            <div className="why-wrapper">

               <div className="heading-flex">
                  <h2>Why You Should <br /> Use Vault Bank</h2>
                  <p>Clean Bank is the future of banking where money can be sent anywhere, anytime and you can hold your own private keys.
                  </p>
               </div>

               <div className="why-items"> {whyItemsList} </div>

            </div>
         </div>
      </section>
   );
};

export default WhyVault;