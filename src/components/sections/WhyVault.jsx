import React from 'react';
import WhyItem from '../layout/WhyItem';

const WhyVault = () => {

   const whyItems = [
      {
         id: '01',
         title: 'All credit card companies',
         description: 'Pay with Visa, MasterCard, American Express, Discover, JCB and Union Pay with a few other simple taps.'
      },
      {
         id: '02',
         title: 'Touchless payments',
         description: 'Tap to pay with Visa, MasterCard, American Express, Discover, JCB, Union Pay and more.'
      },
      {
         id: '03',
         title: 'Multi Currency',
         description: 'Pay with your Visa, MasterCard, American Express, Discover, JCB, Union Pay and more in just a few quick taps.'
      }
   ];

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
                  <p>Clean Bank is the future of banking where money can be sent anywhere, anytime and you can
                     hold your own private keys.
                  </p>
               </div>
               <div className="why-items">{whyItemsList}</div>

            </div>
         </div>
      </section>
   );
};

export default WhyVault;