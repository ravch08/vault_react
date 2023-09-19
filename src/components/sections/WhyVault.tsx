import { useQuery } from "@tanstack/react-query";
import { getWhyItems } from "../../services/apiWhyItems";
import { Loader, WhyItem } from "../utils/helper";

const WhyVault = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["whyItems"],
    queryFn: getWhyItems,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load why items!");
  }

  const whyItemsList = data?.map((whyitem) => (
    <WhyItem
      id={whyitem.id}
      key={whyitem.id}
      title={whyitem.title}
      description={whyitem.description}
    />
  ));

  return (
    <section className="whyVault" aria-labelledby="Why use Vault Bank">
      <div className="container">
        <div className="why-wrapper">
          <div className="heading-flex">
            <h2>
              Why You Should <br /> Use Vault Bank
            </h2>
            <p>
              Clean Bank is the future of banking where money can be sent
              anywhere, anytime and you can hold your own private keys.
            </p>
          </div>

          <div className="why-items">
            {isLoading ? <Loader /> : whyItemsList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVault;
