import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
} from "../utils/helper";

const Clients = () => {
  return (
    <section className="clients" aria-labelledby="Our Client">
      <div className="container">
        <div className="heading">
          <span>Trusted by world’s leading company </span>
        </div>

        <div className="clients-wrapper">
          <figure>
            <img
              width="150"
              src={Client1}
              loading="lazy"
              alt="payment-solutions-logo-1"
            />
          </figure>
          <figure>
            <img
              width="150"
              src={Client2}
              loading="lazy"
              alt="payment-solutions-logo-2"
            />
          </figure>
          <figure>
            <img
              width="150"
              src={Client3}
              loading="lazy"
              alt="payment-solutions-logo-3"
            />
          </figure>
          <figure>
            <img
              width="150"
              src={Client4}
              loading="lazy"
              alt="payment-solutions-logo-4"
            />
          </figure>
          <figure>
            <img
              width="150"
              src={Client5}
              loading="lazy"
              alt="payment-solutions-logo-5"
            />
          </figure>
          <figure>
            <img
              width="150"
              src={Client6}
              loading="lazy"
              alt="payment-solutions-logo-6"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Clients;
