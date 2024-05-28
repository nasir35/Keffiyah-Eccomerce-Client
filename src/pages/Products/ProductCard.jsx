const ProductCard = ({ data }) => {
  const { id, title, price, quantity, brand, image_urls, category } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image_urls[0]}
          alt={category}
          className="rounded-xl w-full min-h-[215px] max-h-[215px] object-cover object-center "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <div className="flex w-full justify-between items-center font-semibold">
          <p>{brand}</p>
          <p>$ {price}</p>
        </div>
        <div className="card-actions flex gap-3">
          <button className="btn btn-neutral">See Details</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
