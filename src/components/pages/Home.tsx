import {
  Banner,
  Billing,
  Counter,
  Testimonials,
  VirtualCards,
  WhyVault,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <Counter />
      <WhyVault />
      <VirtualCards />
      <Billing />
      <Testimonials />
    </main>
  );
};

export default Home;
