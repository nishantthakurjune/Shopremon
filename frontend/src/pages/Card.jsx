import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../store/shopping-cart/cartSlice';
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import { IoIosStar } from "react-icons/io";

export default function Card() {
  //for button
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { state } = useLocation();
  const product = state?.productData;

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      return; // Exit early if quantity is not greater than 0
    }
  
    setIsLoading(true); // Show loading effect
    setTimeout(() => {
      setIsLoading(false); // Remove loading effect after 2 seconds
      dispatch(addToCart({ product, quantity })); // Dispatch add to cart action
      setQuantity(0); // Reset quantity
      setIsAdded(true); // Show "Added to Cart" state
    }, 2000); // Simulate a 2-second delay for loading
  };
  

  return (
    <div className="max-w-7xl mx-auto p-8 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Image */}
        <div className="aspect-square ml-2 mt-2 h-[500px] w-[450px] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover cursor-pointer"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg";
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col mt-16">
          <h1 className="text-5xl font-bold mb-8">{product.title}</h1>
          <p className="text-gray-600 mb-2 ml-2">{product.description}</p>
          
          {/* Rating */}
          <div className="flex pl-1 ml-2 mb-4 bg-green-600 rounded-md w-[35px]">
            <p className="text-md text-white pl-1">{product.rating}</p>
            <p><IoIosStar className="mt-1 text-white"/></p> 
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <p className="text-2xl ml-2 font-bold text-gray-700">
              ${product.price}.00
            </p>
            <p className="text-lg ml-3 font-bold text-gray-500 line-through">
              ${product.oldPrice}.00
            </p>
          </div>

          {/* Cart Controls */}
          <div className="shopping-cart flex gap-3 mt-4">
            <div className="flex ml-2 bg-gray-200 p-2 w-[125px] justify-between text-center rounded-lg">
              <img 
                src={minus} 
                alt="decrease quantity"
                className="minus w-[10px] h-[3px] mt-4 ml-2 cursor-pointer" 
                onClick={handleMinus}
              />
              <div className="mt-1 font-bold">{quantity}</div>
              <img 
                src={plus} 
                alt="increase quantity"
                className="plus w-[10px] h-[10px] mt-3 cursor-pointer" 
                onClick={handlePlus}
              />
            </div>
            <button
    className={`flex bg-black text-white w-[175px] text-center pt-1 gap-2 rounded-lg cursor-pointer justify-center items-center ${
      isLoading || isAdded ? 'opacity-70 cursor-not-allowed' : ''
    }`}
    onClick={handleAddToCart}
    disabled={isLoading || isAdded} // Disable button during loading or after adding to cart
  >
    {isLoading ? (
      <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
    ) : isAdded ? (
      <span className="mt-1">Added to Cart</span>
    ) : (
      <> 
        <span className="mt-1">Add to cart</span>
      </>
    )}
  </button>

          </div>
        </div>
      </div>
    </div>
  );
}