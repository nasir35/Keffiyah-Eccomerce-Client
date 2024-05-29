import SectionHeading from "@/components/Shared/SectionHeading";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";

const TrendingCategories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        setCategories(data?.data.slice(0, 4));
      }
    }
    load();
  }, []);
  return (
    <div className="py-5">
      <SectionHeading
        title="Trending Categories"
        subTitle="Let's check out trending category to Find out products specifically!"
      />
      <div className="grid grid-cols-4 gap-x-5 gap-y-7 mb-8 px-10">
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default TrendingCategories;
