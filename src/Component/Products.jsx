import React from "react";
import { Link } from "react-router-dom";

const Products = ({ id, images, name, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="cursor-pointer">
        <div className="w-[20rem] h-[20rem] object-cover overflow-hidden">
          <img src={images[0]} alt="product_image" className="w-full h-full" />
        </div>
        <div className="flex justify-between w-[20rem] font-bold mt-2">
          <h1>{name}</h1>
          <h1>₹{price.toLocaleString("en-IN")}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Products;
