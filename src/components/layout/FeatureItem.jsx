import PropTypes from "prop-types";
import React from "react";

const FeatureItem = (props) => {
  return (
    <div className="feature-item">
      {props.svg}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

FeatureItem.prototype = {
  svg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
