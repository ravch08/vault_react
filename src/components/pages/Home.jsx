import React from 'react';
import { Banner, Counter, WhyVault, VirtualCards, Billing, Testimonials } from "../layout/helper"

const Home = () => {
   return (
      <main>
         <Banner />
         <Counter />
         <WhyVault />
         <VirtualCards />
         <Billing />
         <Testimonials />
      </main>
   );
};

export default Home;