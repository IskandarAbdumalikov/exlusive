import React from "react";
import cube from "../../assets/cube.svg";

const Category = () => {
  let categoryCard = (
    <div className="category__card " data-name="${category}">
      <svg
        className="category__card__img"
        data-name="${category}"
        width="150"
        height="150"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="${category}" clip-path="url(#clip0_3703_104)">
          <path
            data-name="${category}"
            d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            data-name="${category}"
            d="M25.6667 7H31.1354"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            data-name="${category}"
            d="M28 44.0052V44.0305"
            stroke="black"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            data-name="${category}"
            x1="15.1667"
            y1="39.8333"
            x2="40.8333"
            y2="39.8333"
            stroke="black"
            stroke-width="2"
          />
        </g>
        <defs>
          <clipPath data-name="${category}" id="clip0_3703_104">
            <rect data-name="${category}" width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p className="category" data-name="phone">
        Phone
      </p>
    </div>
  );
  return (
    <section className="categories container">
      <p className="category__cube">
        <img src={cube} alt="" />
        Categories
      </p>
      <h1>Browse By Category</h1>
      <div className="categories__cards">
        {categoryCard}
        {categoryCard}
        {categoryCard}
        {categoryCard}
      </div>
    </section>
  );
};

export default Category;
