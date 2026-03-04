                                                                 import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Btmheader from "./component/header/Btmheader.jsx";
import TopHeader from "./component/header/TopHeader.jsx";
import Home from "./page/Home.jsx";
import ProductDetails from "./page/productDetails.jsx";
import Cart from "./component/SliderProduct/cart.jsx";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./component/header/scrolTop.jsx";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/categorypage.jsx";
import SearchResults from "./component/header/searchResults.jsx";

function App() {
  
  return (
    <>
      <header>
        <TopHeader />
        <Btmheader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            border: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
