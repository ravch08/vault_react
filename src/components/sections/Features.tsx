import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getFeatureItems } from "../utils/api";
import { FeatureItem } from "../utils/helper";

export const featureSchema = z.object({
  id: number().optional(),
  title: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
  imgSrc: string().url(),
  description: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
});

export type FeatureProps = z.infer<typeof featureSchema>;

const Features = () => {
  const { data, error } = useQuery({
    queryKey: ["featureItems"],
    queryFn: getFeatureItems,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load Testimonial Items!");
  }

  return (
    <section className="features" aria-labelledby="Features">
      <div className="container">
        <div className="feature-wrapper">
          <div className="heading-flex">
            <h2>
              Check our Core <br /> features.
            </h2>
            <p>
              Clean Bank is the future of banking where money can be sent
              anywhere, anytime and you can hold your own private keys.
            </p>
          </div>

          <div className="feature-items">
            {data?.map((featureItem: FeatureProps) => (
              <FeatureItem
                key={featureItem.id}
                title={featureItem.title}
                imgSrc={featureItem.imgSrc}
                description={featureItem.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
