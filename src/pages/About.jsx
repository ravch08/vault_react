import React from 'react'

import PageBanner from '../components/layout/PageBanner';
import Counter from '../components/sections/Counter';
import AboutInfo from '../components/sections/AboutInfo';
import Teams from '../components/sections/Teams';

const About = () => {
   return (
      <>
         <PageBanner bannerHeading="About Us" />
         <AboutInfo />
         <Counter />
         <Teams />
      </>
   )
}

export default About;