import React from 'react';

import PageBanner from '../components/layout/PageBanner';
import Features from '../components/sections/Features';
import VirtualCards from '../components/sections/VirtualCards';
import Billing from '../components/sections/Billing';
import Clients from '../components/sections/Clients';

const Solutions = () => {
   return (
      <>
         <PageBanner bannerHeading="Solutions" />
         <Features />
         <VirtualCards />
         <Billing />
         <Clients />
      </>
   );
};

export default Solutions;