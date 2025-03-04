import React from "react";
import { CiSearch } from "react-icons/ci";
import { SiPuma } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between w-full bg-black items-center text-white py-8 px-4">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <div className="text-[2rem]">
              <SiPuma />
            </div>
          </Link>
          <div className="flex gap-8 font-bold cursor-pointer">
            <div className="flex gap-2 items-center hover:border-b border-white transition duration-200">
              <h1>New</h1>
              <AiFillThunderbolt className="text-orange-600" />
            </div>
            <h1 className="hover:border-b border-white">Women</h1>
            <h1 className="hover:border-b border-white">Sports</h1>
            <h1 className="hover:border-b border-white">Motorsport</h1>
            <h1 className="hover:border-b border-white">Collaborations</h1>
            <h1 className="hover:border-b border-white">Kids</h1>
            <h1 className="hover:border-b border-white">Outlet</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex gap-2 border border-white items-center justify-center p-2 px-4 font-bold">
            <CiSearch className="text-[1.5rem]" />
            <h1>SEARCH</h1>
          </button>
          <button className="text-[1.5rem] w-[2.5rem] h-[2.5rem] flex justify-center items-center hover:bg-gray-700 rounded-full cursor-pointer">
            <FaRegHeart />
          </button>
          <button className="text-[1.5rem] w-[2.5rem] h-[2.5rem] flex justify-center items-center hover:bg-gray-700 rounded-full cursor-pointer">
            <MdOutlineShoppingCart />
          </button>
          <Link to="/login">
            <button className="text-[1.5rem] w-[2.5rem] h-[2.5rem] flex justify-center items-center hover:bg-gray-700 rounded-full cursor-pointer">
              <IoPersonOutline />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
