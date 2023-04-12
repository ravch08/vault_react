import React from 'react';
import { PageBanner, Features, VirtualCards, Billing, Clients } from "../layout/helper";

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