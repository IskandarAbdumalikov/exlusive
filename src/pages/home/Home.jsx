import React from "react";
import Hero from "../../components/hero";
import "../../components/hero/hero.scss";
import Category from "../../components/categories";
import ProductsCards from "../../components/prductsCards";
import Certificates from "../../certificates";

const Home = () => {
  return (
    <main>
      <Hero />
      <Category />
      <ProductsCards />
      <Certificates />
    </main>
  );
};

export default Home;
