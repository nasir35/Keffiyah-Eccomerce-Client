import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionHeading from "@/components/Shared/SectionHeading";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = ({ page }) => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [fadeClass, setFadeClass] = useState("fade-enter");
  const { pageNo } = useParams();
  const navigate = useNavigate();
  const productsPerPage = 15;

  useEffect(() => {
    async function load() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (response.status === 200) {
          const totalProducts = response.data;
          setPages(Math.ceil(totalProducts.length / productsPerPage));
          setProducts(totalProducts);
          const initialPage = pageNo ? parseInt(pageNo, 10) : page;
          updateDisplayedProducts(totalProducts, initialPage);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    load();
  }, [page, pageNo]);

  const updateDisplayedProducts = (productsList, currentPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(productsList.slice(startIndex, endIndex));
    setFadeClass("fade-enter");
    setTimeout(() => {
      setFadeClass("fade-enter-active");
    }, 50);
  };

  useEffect(() => {
    const currentPage = pageNo ? parseInt(pageNo, 10) : page;
    updateDisplayedProducts(products, currentPage);
    window.scrollTo(0, 0);
  }, [products, pageNo, page]);

  const handlePageChange = (newPage) => {
    navigate(`/products/${newPage}`);
  };

  return (
    <div className={`py-10 px-10 mb-4 ${fadeClass}`}>
      <SectionHeading
        title="Products"
        subTitle="We have a vast collection of products in different categories! Check out from the below and get your desired one."
      />
      <div className="grid grid-cols-3 gap-3 mb-8">
        {displayedProducts.length > 0 &&
          displayedProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="join">
          {[...Array(pages).keys()].map((pageIndex) => (
            <input
              key={pageIndex}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={`${pageIndex + 1}`}
              checked={
                pageNo
                  ? parseInt(pageNo, 10) === pageIndex + 1
                  : page === pageIndex + 1
              }
              onChange={() => handlePageChange(pageIndex + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
