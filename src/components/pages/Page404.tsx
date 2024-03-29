import { Button, PageBanner } from "../utils/helper";

const Page404 = () => {
  return (
    <main>
      <PageBanner bannerHeading={`404  Page not Found`} />
      <section className="page404">
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>Page Not Found!</h2>
          <Button target="/" />
        </div>
      </section>
    </main>
  );
};

export default Page404;
