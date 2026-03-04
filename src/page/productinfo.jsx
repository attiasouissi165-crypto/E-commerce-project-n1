import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import "./productDetails.css";
import { useContext } from "react";
import { CartContext } from "../component/header/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Productinfo({ product }) {
  const navigate = useNavigate();
  const { cartItem, addToCart } = useContext(CartContext);
  const isincart = cartItem.some((i) => i.id === product.id);
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.thumbnail} alt="" className="toast_img" />
        <div className="toast_content">
          <strong> {product.title} </strong>
          added to Cart
          <div>
            {" "}
            <button className="btn_toast" onClick={() => navigate("/cart")}>
              {" "}
              View cart{" "}
            </button>{" "}
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };
  return (
    <div className="details_item">
      <h2 className="name">{product.title}</h2>
      <div className="start">
        {" "}
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <IoStarHalfOutline />
      </div>
      <p className="price">${product.price}</p>
      <h5>
        Availability : <span>{product.availability}</span>{" "}
      </h5>
      <h5>
        Brand : <span>{product.brand}</span>{" "}
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        {" "}
        <span> Hurry Up! Only {product.stock} products left in stock</span>{" "}
      </h5>
      <button
        className={`add-to-cart ${isincart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
      >
        {isincart ? "item in cart" : "Add to Cart "} <FaCartPlus />
      </button>
      <div className="icons">
        <span>
          {" "}
          <FaRegHeart />
        </span>
        <span>
          {" "}
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Productinfo;
