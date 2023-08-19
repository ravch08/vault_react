import React from "react";
import { ContactForm, Location, PageBanner } from "../utils/helper";

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
