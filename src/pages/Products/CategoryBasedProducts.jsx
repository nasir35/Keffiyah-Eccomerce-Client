import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SectionHeading from "@/components/Shared/SectionHeading";
import ProductCard from "./ProductCard";
import "./Products.css";

const CategoryBasedProducts = () => {
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function load() {
      try {
        const categoriesResponse = await axios.get(
          "http://localhost:3000/categories"
        );
        const productsResponse = await axios.get(
          "http://localhost:3000/products"
        );

        if (categoriesResponse.status === 200) {
          const category = categoriesResponse.data.find(
            (c) => c.id === categoryId
          );
          setCategoryTitle(category?.title);
        }

        if (productsResponse.status === 200) {
          setProducts(productsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    load();
    window.scroll(0, 0);
  }, [categoryId]);
  useEffect(() => {
    if (categoryTitle && products.length > 0) {
      const filtered = products.filter((p) => p.category === categoryTitle);
      setFilteredProducts(filtered);
    }
  }, [categoryTitle, products]);

  return (
    <div className="px-10 mb-8">
      <SectionHeading
        title={`Products for ${categoryTitle} category!`}
        subTitle="We have a vast collection of products in different categories! Check out from the below and get your desired one."
      />
      <div className="grid grid-cols-3 gap-3 mb-8">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryBasedProducts;
