import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../SliderProduct/Product";
import Pagetransition from "../../component/Pagetransition";
import LoadingProductDetails from "../../page/LoadingProductDetails";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);
  return (
    <Pagetransition key={query}>
      <div className="category_page">
        {loading ? (
          <LoadingProductDetails key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top_slider">
              <h1>Results for : {query}</h1>
            </div>
            <div className="products">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            {" "}
            <p> no results found.</p>{" "}
          </div>
        )}
      </div>
    </Pagetransition>
  );
}
