import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { number, string, z } from "zod";

import "swiper/css";
import { getTestimonials } from "../utils/api";
import { TestimonialItem } from "../utils/helper";

export const testimonialSchema = z.object({
  id: number().optional(),
  user: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
  rating: number(),
  designation: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
  imgSrc: string().url(),
  description: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
});

export type TestimonialProps = z.infer<typeof testimonialSchema>;

const Testimonials = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

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
            {data?.map((testimonialItem: TestimonialProps) => (
              <SwiperSlide key={testimonialItem.id}>
                <TestimonialItem
                  user={testimonialItem.user}
                  imgSrc={testimonialItem.imgSrc}
                  rating={testimonialItem.rating}
                  designation={testimonialItem.designation}
                  description={testimonialItem.description}
                ></TestimonialItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
