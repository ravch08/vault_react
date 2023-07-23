import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

const ContactForm = () => {

   const { register, reset, handleSubmit, control, formState: { errors } } = useForm();

   const formSubmitHandler = (data) => {
      console.log(data);
      reset();
   }

   return (
      <section className="contact-form" aria-labelledby="contact form">
         <div className="container">
            <div className="contact-wrapper">

               <form onSubmit={handleSubmit(formSubmitHandler)}>
                  <div className="form-control">
                     <label>Name*</label>
                     <input type="text" placeholder="Your Full Name" {...register('fullname', {
                        required: {
                           value: true,
                           message: 'Name is required!'
                        }
                     })} />
                     <p className="form-error">{errors.fullname?.message}</p>
                  </div>
                  <div className="form-control">
                     <label>Email Address*</label>
                     <input type="email" placeholder="Enter your Email Address" {...register('email', {
                        required: {
                           value: true,
                           message: 'Email is required!'
                        },
                        pattern: {
                           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                           message: 'Invalid email format!'
                        }
                     })} />
                     <p className="form-error">{errors.email?.message}</p>
                  </div>

                  <textarea name="message" cols="20" rows="8" placeholder="Your Message"></textarea>
                  <input type="submit" className="btn-submit" value="Send Message" />
               </form>
               {/* <DevTool control={control} /> */}

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