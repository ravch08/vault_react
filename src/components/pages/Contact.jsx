import React from 'react';
import { PageBanner, ContactForm, Location } from "../layout/helper";

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