import { useLoaderData } from "react-router-dom";
import CategoryRow from "./CategoryRow";

const AllCategory = () => {
  const data = useLoaderData();
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="bg-gray-300 w-full">
          <tr>
            <th>Sl no</th>
            <th>Image</th>
            <th>Category</th>
            <th>Items Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.length > 0 &&
            data.map((c, index) => (
              <CategoryRow key={index} category={c} index={index} />
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
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllCategory;
