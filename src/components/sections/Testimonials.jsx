import React from 'react';
import TestimonialItem from '../layout/TestimonialItem';

import Client1 from '../../assets/payment-solutions-face1.webp';
import Client2 from '../../assets/payment-solutions-face2.webp';
import Client3 from '../../assets/payment-solutions-face3.webp';
import Client4 from '../../assets/payment-solutions-face4.webp';
import Client5 from '../../assets/payment-solutions-face5.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {

   const testimonialItems = [
      {
         id: 't1',
         imgSrc: Client1,
         user: 'Hannah Smith',
         designation: 'SEO Specialist',
         description: 'The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.'
      },
      {
         id: 't2',
         imgSrc: Client2,
         user: 'Mikaela Stone',
         designation: 'PPC Specialist',
         description: 'The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.'
      },
      {
         id: 't3',
         imgSrc: Client3,
         user: 'Jho Deo',
         designation: 'Web Designer',
         description: 'The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.'
      },
      {
         id: 't4',
         imgSrc: Client4,
         user: 'Maria Mak',
         designation: 'Web Expert',
         description: 'The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.'
      },
      {
         id: 't5',
         imgSrc: Client5,
         user: 'Sam Smith',
         designation: 'Front-End Developer',
         description: 'The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.'
      },
   ];

   const testimonialItemsList = testimonialItems.map(testimonialItem =>
      <SwiperSlide key={testimonialItem.id}>
         <TestimonialItem
            user={testimonialItem.user}
            imgSrc={testimonialItem.imgSrc}
            designation={testimonialItem.designation}
            description={testimonialItem.description}
         >
         </TestimonialItem>
      </SwiperSlide>
   );

   return (
      <section className="testimonials" aria-labelledby="Testimonials">
         <div className="container-fluid">
            <div className="testimonial-wrapper">
               <div className="heading">
                  <h2>What our users are saying about Vault Bank</h2>
                  <p>Testimonial from our beloved users</p>
               </div>

               <Swiper
                  loop={true}
                  speed={1500}
                  spaceBetween={30}
                  grabCursor={true}
                  centeredSlides={true}

                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false
                  }}

                  breakpoints={{
                     768: {
                        slidesPerView: 1
                     },
                     1024: {
                        slidesPerView: 3
                     }
                  }}
               >

                  {testimonialItemsList}

               </Swiper >
            </div >
         </div >
      </section >
   );
};

export default Testimonials;