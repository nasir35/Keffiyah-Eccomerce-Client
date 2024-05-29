import axios from "axios";
import { useEffect, useState } from "react";

const SummaryReport = () => {
  const [categoryCount, setCategoryCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    async function load() {
      const d = await axios.get("http://localhost:3000/categories");
      const p = await axios.get("http://localhost:3000/products");
      if (d.status === 200) {
        setCategoryCount(d.data.length);
      }
      if (p.status === 200) {
        setProductCount(p.data.length);
      }
    }
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Category Summary Report</h2>
        <div className="mb-4">
          <p className="text-gray-700">Total Categories: {categoryCount}</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Product Summary Report</h2>
        <div className="mb-4">
          <p className="text-gray-700">Total Products: {productCount}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryReport;
