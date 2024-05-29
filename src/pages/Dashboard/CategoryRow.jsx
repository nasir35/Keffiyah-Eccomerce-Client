import { Link } from "react-router-dom";

const CategoryRow = ({ category, index }) => {
  const { id, title, itemsCount, image } = category;
  return (
    <tr className={index % 2 == 0 ? "bg-slate-50" : "bg-gray-200"}>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{title}</div>
      </td>
      <td>
        <div className="text-sm opacity-50">{itemsCount}</div>
      </td>
      <td>
        <button className="btn btn-outline btn-neutral btn-xs">
          <Link to={`/products/category/${id}`}>View Products</Link>
        </button>
      </td>
    </tr>
  );
};

export default CategoryRow;
