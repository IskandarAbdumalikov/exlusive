import React from "react";
import deliveryImg from "../assets/delivery.svg";
import customerImg from "../assets/customer.svg";
import guaranteeImg from "../assets/guarantee.svg";

const Certificates = () => {
  return (
    <section className="certificates container">
      <div className="certificates__card">
        <img src={deliveryImg} alt="" />
        <h3>FREE AND FAST DELIVERY</h3>
        <h4>Free delivery for all orders over $140</h4>
      </div>
      <div className="certificates__card">
        <img src={customerImg} alt="" />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <h4>Friendly 24/7 customer support</h4>
      </div>
      <div className="certificates__card">
        <img src={guaranteeImg} alt="" />
        <h3>MONEY BACK GUARANTEE</h3>
        <h4>We reurn money within 30 days</h4>
      </div>
    </section>
  );
};

export default Certificates;
