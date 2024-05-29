import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import ProductCard from "@/pages/Products/ProductCard";
import "@/pages/Products/Products.css";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function load() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (response.status === 200) {
          const totalProducts = response.data;
          const latestProducts = totalProducts.reverse().slice(0, 8);
          setProducts(latestProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    load();
  }, []);

  return (
    <div>
      <div className={`px-10 mb-8`}>
        <SectionHeading
          title="Latest Products"
          subTitle=" Check out our latest collection. They are also trending in our store!"
        />
        <div className="grid grid-cols-3 gap-3 mb-8">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
