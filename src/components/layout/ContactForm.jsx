import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
   return (
      <section className="contact-form" aria-labelledby="contact form">
         <div className="container">
            <div className="contact-wrapper">

               <form action="#">
                  <label>Name*</label>
                  <input type="text" name="fullname" placeholder="Your Full Name" />
                  <label>Email Address*</label>
                  <input type="email" name="email" placeholder="Enter your Email Address" />
                  <textarea name="message" cols="20" rows="8" placeholder="Your Message"></textarea>
                  <input type="submit" className="btn-submit" value="Send Message" />
               </form>

               <div className="contact-content">
                  <div className="address ">
                     <h2>Let’s talk <br /> about your big <br /> project</h2>
                     <h3>Address</h3>
                     <p>1012 Pebda Parkway, Mirpur Stadium 11 Dhaka, Bangladesh </p>
                     <h3>Phone</h3>
                     <p>+227 300-3676</p>
                  </div>
                  <span>For technical issues and general inquiries, Please visit our <Link to="#!"> help
                     center</Link>.</span>
               </div>

            </div>
         </div>
      </section>
   );
};

export default ContactForm;