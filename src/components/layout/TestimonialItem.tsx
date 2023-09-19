import PropTypes from "prop-types";
import { TestimonialProps } from "../../types/types";
import { Rating } from "../utils/helper";

const TestimonialItem = (props: TestimonialProps) => {
  return (
    <div className="testimonial-item">
      <figure>
        <img src={props.imgSrc} alt={props.user} />
      </figure>
      <h3>{props.user}</h3>
      <h4>{props.designation}</h4>
      <p>{props.description}</p>
      <Rating rating={props.rating} />
    </div>
  );
};

TestimonialItem.prototype = {
  user: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TestimonialItem;
