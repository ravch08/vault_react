import React from 'react';
import Button from '../layout/Button';
import TeamItem from '../layout/TeamItem';

import Team1 from '../../assets/payment-solutions-team1.webp';
import Team2 from '../../assets/payment-solutions-team2.webp';
import Team3 from '../../assets/payment-solutions-team3.webp';
import Team4 from '../../assets/payment-solutions-team4.webp';

const Teams = () => {

   const teamItems = [
      {
         id: 't1',
         facebook: 'https://www.facebook.com/',
         linkedIn: 'https://in.linkedin.com/',
         twitter: 'https://twitter.com/',
         imgSrc: Team1,
         user: 'Sufia Anam',
         designation: 'Senior Project Manager',
      },
      {
         id: 't2',
         facebook: 'https://www.facebook.com/',
         linkedIn: 'https://in.linkedin.com/',
         twitter: 'https://twitter.com/',
         imgSrc: Team2,
         user: 'Jubayer Al Hasan',
         designation: 'Senior Developer',
      },
      {
         id: 't3',
         facebook: 'https://www.facebook.com/',
         linkedIn: 'https://in.linkedin.com/',
         twitter: 'https://twitter.com/',
         imgSrc: Team3,
         user: 'Muhibbur Rashid',
         designation: 'Marketing Expertr',
      },
      {
         id: 't4',
         facebook: 'https://www.facebook.com/',
         linkedIn: 'https://in.linkedin.com/',
         twitter: 'https://twitter.com/',
         imgSrc: Team4,
         user: 'Rashed Kabir',
         designation: 'Designer',
      },
   ];

   const teamItemsList = teamItems.map(teamItem => <TeamItem
      key={teamItem.id}
      user={teamItem.user}
      imgSrc={teamItem.imgSrc}
      twitter={teamItem.twitter}
      facebook={teamItem.facebook}
      linkedIn={teamItem.linkedIn}
      designation={teamItem.designation}
   />);

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
               {teamItemsList}
            </div>

         </div>
      </section>
   );
};

export default Teams;