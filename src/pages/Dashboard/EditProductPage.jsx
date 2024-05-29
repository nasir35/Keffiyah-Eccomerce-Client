import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import ConfirmModal from "./ConfirmModal";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    image_urls: [""],
  });

  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data?.data);
    }
    load();
  }, [id]);

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data.status === 200) {
        setCategories(
          data.data.map((category) => ({
            value: category.id,
            label: category.title,
          }))
        );
      }
    }
    load();
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setProduct({
      ...product,
      category: selectedOption ? selectedOption.label : "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image_urls") {
      setProduct({ ...product, image_urls: [value] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSave = async () => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    toast.success("Product Details Updated!");
    setTimeout(() => {
      navigate("/dashboard/all-products");
    }, 1000);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 ">Edit Product</h2>
        <div className="space-y-4">
          <div className="flex gap-3 items-center ">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Kashmiri Punjabi"
              value={product.title}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Kashmiri"
              value={product.brand}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="123"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-number-input"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-number-input"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Category
            </label>
            <Select
              value={categories.find(
                (option) => option.label === product.category
              )}
              onChange={handleCategoryChange}
              options={categories}
              className="mt-1 block w-full"
              classNamePrefix="react-select"
              isClearable
              placeholder="Select or type to search..."
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write about product details..."
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-24 block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image_urls"
              placeholder="https://www.example.com/media/example.jpg"
              value={product.image_urls[0]}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => navigate("/dashboard/all-products")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
        <ConfirmModal
          action={"Edit"}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleSave}
        />
      </div>
    </div>
  );
};

export default EditProductPage;
