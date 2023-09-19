import {
  Billing,
  Clients,
  Features,
  PageBanner,
  VirtualCards,
} from "../utils/helper";

const Solutions = () => {
  return (
    <main>
      <PageBanner bannerHeading="Solutions" />
      <Features />
      <VirtualCards />
      <Billing />
      <Clients />
    </main>
  );
};

export default Solutions;
