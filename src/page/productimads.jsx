import React from "react";
import "./productDetails.css";

function Productimads({ product }) {
  return (
    <div className="imgs-item">
      <div className="big-imag">
        <img id="big_imags" src={product.images[0]} alt={product.title} />
      </div>

      <div className="small_imag">
        {product.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={product.title}
              onClick={() => (document.getElementById("big_imags").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productimads;
