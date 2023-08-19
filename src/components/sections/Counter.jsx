import React from "react";

const Counter = () => {
  return (
    <section className="counter" aria-labelledby="Counter">
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-item">
            <span>250+</span>
            <p>Trusted by companies</p>
          </div>
          <div className="counter-item">
            <span>20M+</span>
            <p>People of Vault Bank</p>
          </div>
          <div className="counter-item">
            <span>85%</span>
            <p>Revenue Growth</p>
          </div>
          <div className="counter-item">
            <span>24/7</span>
            <p>Customer Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
