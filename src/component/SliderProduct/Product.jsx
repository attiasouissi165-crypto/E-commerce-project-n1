import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./slideProduct.css"
import toast, { Toaster } from 'react-hot-toast';
import { FaCheck } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../header/CartContext';


export default  function Product({item}) {
   
  const navigate = useNavigate()
  const {cartItem, addToCart} = useContext(CartContext);
  console.log(cartItem);
  const isincart = cartItem.some((i) => i.id === item.id);
  const handleAddToCart = () => {

    addToCart(item)
    toast.success(
      <div className='toast-wrapper'> 
<img src={item.thumbnail} alt="" className='toast_img'/>
<div className="toast_content">
  <strong> {item.title} </strong>
  added to Cart
  <div> <button className='btn_toast' onClick={() => navigate('/cart')}>
     View cart </button> </div>
</div>
      </div>
      ,{duration : 3500}
    )
  }

  return (
    <div className={`product-item ${isincart ? 'in-cart' : ''}`}>
      <Link to={`/product/${item.id}`}>
      <span className='btn_add_cart'><FaCheck />in cart</span>
            <div className="img_Product">
        <img src={item.thumbnail} alt="" />
      </div>
    <p className="name_Product">{item.title}</p>
    <div className="start">
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <IoStarHalfOutline />
    </div>
    <p className="price">${item.price}</p>
    </Link>

    
    <div className="icons">
      <span className='btn_addcart' onClick={handleAddToCart }> <FaCartPlus /></span>
<span>     <FaRegHeart /></span>
<span> <FaShare /></span>
      </div>

  
    </div>
   
  )
}

