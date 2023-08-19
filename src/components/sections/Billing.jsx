import React from "react";
import { Button, TransactionCard, VisaCard } from "../utils/helper";

const Billing = () => {
  return (
    <section
      className="billing"
      aria-labelledby="Easy To Control Your Billing & Invoicing"
    >
      <div className="container">
        <div className="billing-wrapper">
          <div className="billing-images">
            <img
              className="billing-image-1"
              src={TransactionCard}
              alt="payment-solutions-transactions-card"
            />
            <img
              className="billing-image-2"
              src={VisaCard}
              alt="payment-solutions-visa-card"
            />
          </div>

          <div className="billing-content">
            <h2>Easy To Control Your Billing & Invoicing</h2>
            <p>
              Enable foster purchasing by giving every employee c.c.. to he fun.
              they need in o sole and secure manner.
            </p>
            <Button target="../contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
