import { FiMenu } from "react-icons/fi";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/Blog" },
  { title: "Contact", link: "/contact" },
];

export default function Btmheader() {
  const location = useLocation();
  const [categories, setcategories] = useState([]);
  const [isCategoryOpen, setisCategoryOpen] = useState(false);
  useEffect(() => {
    setisCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
    console.log(categories);
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setisCategoryOpen(!isCategoryOpen)}
            >
              <FiMenu />
              <p>Browse category</p>
              <IoIosArrowDown />
            </div>
            <div
              className={`cateygory_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link key={category.slug} to={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav_Links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign_regs_icon">
          <Link to="">
            <FaSignInAlt />
          </Link>
          <Link to="">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
