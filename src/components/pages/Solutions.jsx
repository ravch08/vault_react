import React from 'react';
import { PageBanner, Features, VirtualCards, Billing, Clients } from "../layout/helper";

const Solutions = () => {
   return (
      <main>
         <PageBanner bannerHeading="Solutions" />
         <Features />
         <VirtualCards />
         <Billing />
         <Clients />
      </main>
   );
};

export default Solutions;