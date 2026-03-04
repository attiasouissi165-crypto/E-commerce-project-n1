import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";
export default function SearChbox() {
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const location = useLocation()
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
    setsuggestions([]);
  };
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!search.trim()) {
        setsuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
        );
        const data = await res.json();
        setsuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Search Error ", error);
        setsuggestions([]);
      }
    };
    const debonucs = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    return () => clearTimeout(debonucs);
  }, [search]);
  useEffect(() => {
  setsuggestions([])
  }, [location])
  return (
    <div className="searchbox_container">
      <form onSubmit={handelSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for product"
          onChange={(e) => setsearch(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <Link to={`/product/${item.id}`}>
              {" "}
              <li key={item.id}>
                <img src={item.thumbnail} alt="" /> <span>{item.title}</span>{" "}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
