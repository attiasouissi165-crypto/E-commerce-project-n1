import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../component/SliderProduct/Product";
import "./categorypage.css";
import LoadingProductDetails from "./LoadingProductDetails";
import Pagetransition from "../component/Pagetransition"
export default function CategoryPage() {
  const { category } = useParams();
  const [categorypage, setcategorypage] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setcategorypage(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, [category]);
  console.log(categorypage);

  return (
      <Pagetransition key={category} >
         <div className="category_page">
      {loading ? (
        <LoadingProductDetails key={category} />
      ) : (
        <div className="container">
          <div className="top_slider">
            <h1>
              {category}: {categorypage.limit}
            </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            </p>
          </div>
          <div className="products">
            {categorypage.products.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
      </Pagetransition>
   
  );
}
