import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const Button = ({ target }: ButtonProps) => {
  return (
    <Link to={target} className="btn-primary">
      Get Started
    </Link>
  );
};

export default Button;
