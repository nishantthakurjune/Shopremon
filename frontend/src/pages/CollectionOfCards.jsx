import { Link } from "react-router-dom";

export default function CollectionOfCards({ product }) {
  if (!product) return null;

  return (
    <div className="flex flex-col p-6 border rounded-lg shadow-black cursor-pointer hover:shadow-2xl transition-shadow">
      <Link to={`/card/${product._id}`} state={{ productData: product }}>
        <div className="aspect-square bg-gray-100 mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg";
            }}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-medium mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="mt-auto">
            <p className="text-gray-700 font-bold">${product.price}.00</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
