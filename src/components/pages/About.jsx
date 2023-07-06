import React from 'react'
import { AboutInfo, PageBanner, Counter, Teams } from "../layout/helper";

const About = () => {
   return (
      <main>
         <PageBanner bannerHeading="About Us" />
         <AboutInfo />
         <Counter />
         <Teams />
      </main>
   );
};

export default About;