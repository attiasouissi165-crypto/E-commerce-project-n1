import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/panneaux-publicitaires-1024x447.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import SearChbox from "./searchbox";
export default function TopHeader() {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link className="Logo" to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        <SearChbox />
        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <Link to={"/cart"}>
              <FaCartPlus />
              <span className="count">{cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
