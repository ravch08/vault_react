import { PageBannerProps } from "../../types/types";

const PageBanner = ({ bannerHeading }: PageBannerProps) => {
  return (
    <section className="page-banner heroSection" aria-labelledby="About Us">
      <div className="container">
        <div className="heading">
          <h1> {bannerHeading} </h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
