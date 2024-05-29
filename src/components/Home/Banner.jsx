import bannerBg from "@images/bannerBg.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="hero h-[80vh] bg-left-top"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5"></div>
        <div className="col-span-7 container flex flex-col justify-center items-center mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-5">
            Welcome to Our Keffiyah Store
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover the latest trends in fashion category likes T-shirt,
            Punjabi, Hijabs more.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <Link
              to="/products"
              className="btn btn-primary mr-4 lg:mr-8 mb-4 lg:mb-0"
            >
              Explore Products
            </Link>
            <Link to="/contact-us" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
