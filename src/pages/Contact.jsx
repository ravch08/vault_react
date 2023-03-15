import React from 'react';

import PageBanner from '../components/layout/PageBanner';
import ContactForm from '../components/layout/ContactForm';
import Location from '../components/layout/Location'

const Contact = () => {

   return (
      <React.Fragment>
         <PageBanner bannerHeading="Contact" />
         <ContactForm />
         <Location />
      </React.Fragment>
   );
};

export default Contact;