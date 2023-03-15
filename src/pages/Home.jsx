import React from 'react';

import Banner from '../components/sections/Banner';
import Counter from '../components/sections/Counter';
import WhyVault from '../components/sections/WhyVault';
import Billing from '../components/sections/Billing';
import VirtualCards from '../components/sections/VirtualCards';
import Testimonials from '../components/sections/Testimonials';

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