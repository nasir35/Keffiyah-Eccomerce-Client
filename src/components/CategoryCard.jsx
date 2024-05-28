import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { id, title, itemsCount, image } = category;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full max-h-[200px] min-h-[200px] object-contain object-center p-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Available items : {itemsCount}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">
            <Link to={`/products/category/${id}`}>View All Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
