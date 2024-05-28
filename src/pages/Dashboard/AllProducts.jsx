import { useLoaderData } from "react-router-dom";
import ProductRow from "./ProductRow";

const AllProducts = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
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
                <ProductRow key={index} index={index} product={p} />
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
    </div>
  );
};

export default AllProducts;
