import Banner from "@components/Home/Banner";
import TrendingCategories from "../components/Home/TrendingCategories";
import LatestProducts from "../components/Home/LatestProducts";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <TrendingCategories />
      <LatestProducts />
    </div>
  );
};

export default Home;
