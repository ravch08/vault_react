import React from 'react';
import { Banner, Counter, WhyVault, VirtualCards, Billing, Testimonials } from "../layout/helper"

const Home = () => {
   return (
      <React.Fragment>
         <Banner />
         <Counter />
         <WhyVault />
         <VirtualCards />
         <Billing />
         <Testimonials />
      </React.Fragment>
   );
};

export default Home;