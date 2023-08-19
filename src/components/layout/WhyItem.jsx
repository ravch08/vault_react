import PropTypes from "prop-types";
import React from "react";

const WhyItem = (props) => {
  return (
    <div className="why-item">
      <h3>{props.id}</h3>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

WhyItem.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhyItem;
