import { FeatureItemProps } from "../../types/types";

const FeatureItem = ({ svg, title, description }: FeatureItemProps) => {
  return (
    <div className="feature-item">
      {svg}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
