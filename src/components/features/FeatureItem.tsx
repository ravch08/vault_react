import { FeatureProps } from "../sections/Features";

const FeatureItem = ({ imgSrc, title, description }: FeatureProps) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
