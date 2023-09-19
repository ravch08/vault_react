import { useQuery } from "@tanstack/react-query";

import { getFeatures } from "../../services/apiFeatures";
import { FeatureItem, Loader } from "../utils/helper";

const Features = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["featureItems"],
    queryFn: getFeatures,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load Testimonial Items!");
  }

  const featureItemsList = data?.map((featureItem) => (
    <FeatureItem
      key={featureItem.id}
      title={featureItem.title}
      imgSrc={featureItem.imgSrc}
      description={featureItem.description}
    />
  ));

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
            {isLoading ? <Loader /> : featureItemsList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
