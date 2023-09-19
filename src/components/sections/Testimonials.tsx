import { testimonialItems } from "../utils/data";
import { TestimonialItem } from "../utils/helper";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const testimonialItemsList = testimonialItems.map((testimonialItem) => (
    <SwiperSlide key={testimonialItem.id}>
      <TestimonialItem
        user={testimonialItem.user}
        imgSrc={testimonialItem.imgSrc}
        rating={testimonialItem.rating}
        designation={testimonialItem.designation}
        description={testimonialItem.description}
      ></TestimonialItem>
    </SwiperSlide>
  ));

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
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialItemsList}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;