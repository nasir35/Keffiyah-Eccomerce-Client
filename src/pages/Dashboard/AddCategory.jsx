import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const [categoriesCount, setCategoriesCount] = useState(null);

  useEffect(() => {
    async function load() {
      const d = await axios.get("http://localhost:3000/categories");
      if (d.status === 200) {
        setCategoriesCount(d.data.length);
      }
    }
    load();
  }, []);

  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: null,
    title: "",
    itemsCount: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory = {
      ...category,
      id: categoriesCount + 1,
    };
    try {
      await axios.post("http://localhost:3000/categories", newCategory);
      toast.success("Category Added!");
    } catch (e) {
      console.log("Failed to add");
      toast.error("Failed to Add new Category!");
    }
    setTimeout(() => {
      navigate("/dashboard/all-categories");
    }, 1000);
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
        <h2 className="text-2xl font-bold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              name="title"
              placeholder="Sherwani"
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Items Count</label>
            <input
              type="number"
              name="itemsCount"
              placeholder="12"
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://m.media-amazon.com/images/I/515c+nXHjQL._AC_SY741_.jpg"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/all-categories")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
