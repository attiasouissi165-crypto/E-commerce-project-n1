import React, { useEffect } from "react";
import { useState } from "react";
import HrroSlider from "../component/hrroSlider";
import SliderProduct from "../component/SliderProduct/SliderProduct.jsx";
import "./homs.css";
import { Link } from "react-router-dom";
import LoadingProductDetails from "./LoadingProductDetails.jsx"
import Pagetransition from "../component/Pagetransition.jsx";

const categoryList = [

  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"

];

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categoryList.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("gjhg gjhgkjh gkjhgkj ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <Pagetransition>
      <div>
        <HrroSlider />
        {loading
          ? categoryList.map((category) => (
              <LoadingProductDetails key={category} />
            ))
          : categoryList.map((category) => (
              <SliderProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </Pagetransition>
  );
}
