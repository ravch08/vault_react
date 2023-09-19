import { teamItems } from "../utils/data";
import { Button, TeamItem } from "../utils/helper";

const Teams = () => {
  const teamItemsList = teamItems.map((teamItem) => (
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

        <div className="team-items"> {teamItemsList} </div>
      </div>
    </section>
  );
};

export default Teams;
