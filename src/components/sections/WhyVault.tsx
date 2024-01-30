import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getWhyVault } from "../utils/api";
import { WhyItem } from "../utils/helper";

const whyVaultSchema = z.object({
  id: number().optional(),
  title: string().min(5, { message: "Atleast 5 charaters are required!" }),
  description: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
});

export type WhyVaultProps = z.infer<typeof whyVaultSchema>;

const WhyVault = () => {
  const { data } = useQuery({
    queryKey: ["whyVault"],
    queryFn: getWhyVault,
  });

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
            {data?.map((whyitem: WhyVaultProps) => (
              <WhyItem
                id={whyitem.id}
                key={whyitem.id}
                title={whyitem.title}
                description={whyitem.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVault;
