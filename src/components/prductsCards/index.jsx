import React, { useState, useEffect } from "react";
import cube from "../../assets/cube.svg";
import mainUrl from "../../api";
import like from "../../assets/like.svg";
import { Link } from "react-router-dom";

const ProductsCards = () => {
  const [products, setProducts] = useState(null);
  const [loader, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const pageCount = 4;
  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`/products`, {
        params: {
          limit: offset * pageCount,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset]);

  let loadingItem = (
    <div className="loading__item">
      <div className="loading__img bg__animation"></div>
      <div className="loading__title bg__animation"></div>
      <div className="loading__title bg__animation"></div>
    </div>
  );

  let productCard = products?.map((product) => (
    <div className="product__card" key={product.id}>
      <Link className="product__card__img" to={`details/${product.id}`}>
        <img
          className="product__card__img"
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>

      <div className="product__info">
        <p>{product.description}</p>
        <h2 className="product__title">{product.title}</h2>
        <div className="product__rating">
          <p className="product__price">{product.price}$</p>
          <p className="product__rating">{product.rating.rate}</p>
        </div>
      </div>
      <img src={like} alt="" className="like__img" />
    </div>
  ));
  return (
    <section className="products container">
      <p className="category__cube">
        <img src={cube} alt="" />
        Our Products
      </p>

      <div className="products__cards">{productCard}</div>
      {loader ? (
        <div className="loading">
          {loadingItem}
          {loadingItem}
          {loadingItem}
          {loadingItem}
        </div>
      ) : (
        <></>
      )}
      <button className="see__more-btn" onClick={() => setOffset((p) => p + 1)}>
        View more Products
      </button>
    </section>
  );
};

export default ProductsCards;
