import React from 'react'
import { AboutInfo, PageBanner, Counter, Teams } from "../layout/helper";

const About = () => {
   return (
      <React.Fragment>
         <PageBanner bannerHeading="About Us" />
         <AboutInfo />
         <Counter />
         <Teams />
      </React.Fragment>
   );
};

export default About;