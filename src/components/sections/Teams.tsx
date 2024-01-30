import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getTeams } from "../utils/api";
import { Button, TeamItem } from "../utils/helper";

const teamSchema = z.object({
  id: number().optional(),
  facebook: string().url(),
  linkedIn: string().url(),
  twitter: string().url(),
  imgSrc: string().url(),
  user: string().min(5, { message: "Atleast 5 charaters are required!" }),
  designation: string().min(5, {
    message: "Atleast 5 charaters are required!",
  }),
});

export type TeamsProps = z.infer<typeof teamSchema>;

const Teams = () => {
  const { data } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

  return (
    <section className="team" aria-labelledby="Our Team">
      <div className="container">
        <div className="heading-flex">
          <div className="team-content ">
            <h2>Our Team</h2>
            <p>We’ve varity package for our client based on your business.</p>
          </div>
          <Button target="../contact" />
        </div>

        <div className="team-items">
          {data?.map((teamItem: TeamsProps) => (
            <TeamItem
              key={teamItem.id}
              user={teamItem.user}
              imgSrc={teamItem.imgSrc}
              twitter={teamItem.twitter}
              facebook={teamItem.facebook}
              linkedIn={teamItem.linkedIn}
              designation={teamItem.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
