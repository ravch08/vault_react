import { AboutInfo, Counter, PageBanner, Teams } from "../utils/helper";

const About = () => {
  return (
    <main>
      <PageBanner bannerHeading="About Us" />
      <AboutInfo />
      <Counter />
      <Teams />
    </main>
  );
};

export default About;
