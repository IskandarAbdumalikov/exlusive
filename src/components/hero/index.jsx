import React from "react";
import heroImg from "../../assets/hero.svg"

const Hero = () => {
  return (
    <section id="hero" class="container">
      <div class="hero">
        <div class="hero__left">
          <p class="brend">
            <img src="" alt="" />
            iPhone 14 Series
          </p>
          <h1 class="hero__title">Up to 10% off Voucher</h1>
          <a href="#">Shop now</a>
        </div>
        <div class="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
