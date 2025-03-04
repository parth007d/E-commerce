import React from "react";
import Products from "./Products";
import Productssdata from '../Array/Products'

const All_Products = () => {

  return (
    <div className="mt-[4rem] ml-[2rem]">
      <div className="text-[1.5rem] font-bold">
        <h1>MAKE WAY FOR NEW DRIP</h1>
      </div>
      <div className="mt-4 flex gap-4">
        {
            Productssdata.map((item,index)=>{
                return <Products id={item.id} images={item.images} name={item.name} price={item.price} key={index}/>
            })
        }
      </div>
    </div>
  );
};



export default All_Products;
