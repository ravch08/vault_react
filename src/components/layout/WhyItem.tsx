import { WhyItemProps } from "../../types/types";

const WhyItem = (props: WhyItemProps) => {
  return (
    <div className="why-item">
      <h3>{props.id}</h3>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default WhyItem;
