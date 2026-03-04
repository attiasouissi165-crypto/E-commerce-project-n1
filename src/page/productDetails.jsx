import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import "./productDetails.css";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import SliderProduct from "../component/SliderProduct/SliderProduct";
import LoadingProductDetails from "../page/LoadingProductDetails";
import Productimads from "./productimads";
import Productinfo from "./productinfo";
import Pagetransition from "../component/Pagetransition";

function ProductDetails() {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);
  console.log(product);
  if (!product) return <p>Product not found</p>;
  return (
    <Pagetransition key={id}>
      <div>
        {loading ? (
          <LoadingProductDetails />
        ) : (
          <div className="item-detials">
            <div className="container">
              <Productimads product={product} />
              <Productinfo product={product} />
            </div>
          </div>
        )}
        {loadingRelatedProducts ? (
          <p>Loading ... </p>
        ) : (
          <SliderProduct
            key={product.category}
            data={relatedProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </Pagetransition>
  );
}

export default ProductDetails;
