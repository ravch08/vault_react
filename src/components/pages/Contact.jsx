import React from 'react';
import { PageBanner, ContactForm, Location } from "../layout/helper";

const Contact = () => {

   return (
      <main>
         <PageBanner bannerHeading="Contact" />
         <ContactForm />
         <Location />
      </main>
   );
};

export default Contact;