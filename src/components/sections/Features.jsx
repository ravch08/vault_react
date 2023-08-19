import React from "react";
import { featureItems } from "../utils/data";
import { FeatureItem } from "../utils/helper";

const featureItemsList = featureItems.map((featureItem) => (
  <FeatureItem
    key={featureItem.id}
    svg={featureItem.svg}
    title={featureItem.title}
    description={featureItem.description}
  />
));

const Features = () => {
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

          <div className="feature-items"> {featureItemsList} </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
