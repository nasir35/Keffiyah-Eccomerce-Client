import { useLoaderData, useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState(null);
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    setProductId(id);
    openModal();
  };
  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      toast.success("Product Deleted!");
      setTimeout(() => {
        navigate("/dashboard/all-products");
        closeModal();
      }, 1000);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>Sl no</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((p, index) => (
                <ProductRow
                  key={index}
                  index={index}
                  product={p}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
          {/* foot */}
          <tfoot className="bg-gray-300">
            <tr>
              <th>Sl no</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <ConfirmModal
        action={"Delete"}
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={deleteProduct}
      />
    </div>
  );
};

export default AllProducts;
