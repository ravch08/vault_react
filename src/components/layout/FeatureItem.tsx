import { FeatureItemProps } from "../../types/types";

const FeatureItem = ({ imgSrc, title, description }: FeatureItemProps) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
