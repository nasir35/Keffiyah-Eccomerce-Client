import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchBar = ({ setFocused }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    loadProducts();
  }, []);

  const debouncedSearch = (func, delay) => {
    let timeoutId;
    const debouncedFunc = function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
    debouncedFunc.cancel = () => clearTimeout(timeoutId);
    return debouncedFunc;
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedSearchFunction(query);
  };

  const debouncedSearchFunction = debouncedSearch((query) => {
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(matchedProducts.slice(0, 5));
  }, 500);

  const handleSuggestionClick = () => {
    setSuggestions([]);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="pr-2 outline-none focus:outline-none h-8 bg-base-200"
        placeholder="Search.."
        value={searchTerm}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white shadow-md w-64 rounded mt-1 top-12">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="px-4 py-2 hover:bg-gray-200"
              onClick={handleSuggestionClick}
            >
              <Link to={`/products/product-details/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
