import { Link } from "react-router-dom";

const ProductRow = ({ index, product }) => {
  const { id, title, brand, price, image_urls, quantity, category } = product;
  return (
    <tr className={index % 2 == 0 ? "bg-slate-50" : "bg-gray-200"}>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image_urls[0]} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>{brand}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td className="flex gap-2 h-full items-center">
        <button className="btn btn-outline btn-neutral btn-xs">
          <Link to={`/products/product-details/${id}`}>Details</Link>
        </button>
        <button className="btn btn-outline btn-xs btn-primary">
          <Link to={`/dashboard/product-edit/${id}`}>Edit</Link>
        </button>
        <button className="btn btn-outline btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
