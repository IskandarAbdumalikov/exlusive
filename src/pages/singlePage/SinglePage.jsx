import React, { memo, useEffect, useState } from "react";
import "./singleItem.scss";
import { useParams } from "react-router-dom";
import axios from "../../api";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  let singleItem = (
    <div className="single__content">
      <div className="single__content__left">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="single__content__right">
        <div className="single__content__right__top">
          <h2 className="content__title">{data.title}</h2>
          <div className="single__rating">
            <p>{data.rating}</p>
          </div>
          <div className="category">
            <h2 className="single__price">$ {data.price}</h2>
          </div>
          <p className="content__desc">{data.description}</p>
        </div>
      </div>
    </div>
  );
  return (
    <section className="single__item container">
      <h1>Shop item</h1>
      {loading ? (
        <div className="single__loading">
          <div className="single__loading__img bg__animation"></div>
          <div className="single__loading__info">
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div id="single__hero">{singleItem}
      </div>
    </section>
  );
};

export default memo(SinglePage);
