import React from "react";
import { useContext } from "react";
import { CartContext } from "../header/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import Pagetransition from "../../component/Pagetransition";

function Cart() {
  const { cartItem, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const Total = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Pagetransition>
      <div className="checkout">
        <div className="ordersummury">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItem.length === 0 ? (
              <p>your cart is empty.</p>
            ) : (
              cartItem.map((item, index) => (
                <div className="item_cart" key={index}>
                  <div className="image_name">
                    <img src={item.thumbnail} alt="" />
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price">${item.price} </p>
                      <div className="quantity_control">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className=" quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delet"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="buttom_summay">
            <div className="shop_table">
              <p>Total :</p>
              <span className="Total_chekout">${Total.toFixed(3)}</span>
            </div>
            <div className="button_div">
              <button type="submit"> place order </button>
            </div>
          </div>
        </div>
      </div>
    </Pagetransition>
  );
}

export default Cart;
