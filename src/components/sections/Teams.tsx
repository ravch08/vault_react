import { useQuery } from "@tanstack/react-query";

import { getTeams } from "../../services/apiTeams";
import { Button, Loader, TeamItem } from "../utils/helper";

const Teams = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

  if (error) {
    console.error(error);
    throw new Error("Could not load Testimonial Items!");
  }

  const teamItemsList = data?.map((teamItem) => (
    <TeamItem
      key={teamItem.id}
      user={teamItem.user}
      imgSrc={teamItem.imgSrc}
      twitter={teamItem.twitter}
      facebook={teamItem.facebook}
      linkedIn={teamItem.linkedIn}
      designation={teamItem.designation}
    />
  ));

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
          {isLoading ? <Loader /> : teamItemsList}
        </div>
      </div>
    </section>
  );
};

export default Teams;
