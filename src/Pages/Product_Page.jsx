import React from "react";
import { useParams } from "react-router-dom";
import Productssdata from "../Array/Products";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Product_Page = () => {
  const { id } = useParams();

  const FindProduct = Productssdata.find((item) => {
    return item.id.toString() === id.toString();
  });

  return (
    <>
      <div className="p-[2rem] flex">
        <div className="w-[52rem] flex flex-wrap gap-4">
          {FindProduct.images.map((item, index) => {
            return (
              <div className="w-[25rem]" key={index}>
                <img src={item} alt="product_images" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[2rem] font-bold">{FindProduct.name}</h1>
          {FindProduct.Bestseller && (
            <h1 className="bg-blue-400 w-max text-white p-2 font-semibold">
              BEST SELLER
            </h1>
          )}
          <div className="flex gap-2 items-center">
            <h1 className="text-[1.5rem] font-bold">
              ₹{FindProduct.price.toLocaleString("en-IN")}
            </h1>
            <h1 className="text-[1.2rem] text-gray-400 font-bold line-through">
              ₹{FindProduct.offer_price.toLocaleString("en-IN")}
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="flex gap-2 border bg-black text-white text-[2rem]">
              <CiShoppingCart />
              ADD TO CART
            </button>
            <button className="flex gap-2 border bg-black text-white text-[2rem]">
              <CiHeart />
              WISHLIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Page;
