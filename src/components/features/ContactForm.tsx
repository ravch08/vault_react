import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

const contactSchema = z.object({
  contactFullName: string()
    .min(5, { message: "Must be 4 or more characters long" })
    .max(24, { message: "Must be s4 characters or less" }),
  contactEmail: z.string().email({ message: "Invalid email address" }),
  contactText: z
    .string()
    .min(6, { message: "Must be 6 or more characters long." }),
});

type ContactProps = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProps>({ resolver: zodResolver(contactSchema) });

  const formSubmitHandler = (data: ContactProps) => {
    console.log(data);
    reset();
  };

  return (
    <section className="contact-form" aria-labelledby="Contact Form">
      <div className="container">
        <div className="contact-wrapper">
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <div className="form-control">
              <label htmlFor="contactFullName">Name*</label>
              <input
                type="text"
                id="contactFullName"
                placeholder="Your Full Name"
                {...register("contactFullName")}
              />
              <p className="form-error">{errors.contactFullName?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="contactEmail">Email Address*</label>
              <input
                type="email"
                id="contactEmail"
                placeholder="Enter your Email Address"
                {...register("contactEmail", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email format is Invalid!",
                  },
                })}
              />
              <p className="form-error">{errors.contactEmail?.message}</p>
            </div>

            <textarea
              cols={20}
              rows={8}
              name="message"
              id="contactText"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" className="btn-submit" value="Send Message" />
          </form>
          {/* <DevTool control={control} /> */}

          <div className="contact-content">
            <div className="address ">
              <h2>
                Let’s talk <br /> about your big <br /> project
              </h2>
              <h3>Address</h3>
              <p>1012 Pebda Parkway, Mirpur Stadium 11 Dhaka, Bangladesh </p>
              <h3>Phone</h3>
              <p>+227 300-3676</p>
            </div>
            <span>
              For technical issues and general inquiries, Please visit our{" "}
              <Link to="#!"> help center</Link>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
