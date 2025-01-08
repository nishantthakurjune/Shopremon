import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/shopping-cart/cartSlice';  // Update the path

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // The .reduce() method is just a fancy way of saying 
  // "go through each item and keep a running total." 
  // Think of it like scanning items at a checkout counter,
  // AkKJjkwhere the total keeps growing with each item scanned.
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));  // Use the imported action
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));  // Use the imported action
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));  // Use the imported action
  };

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 flex justify-center">My Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
          <Link to="/collections" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-500">${item.price}.00 x {item.quantity}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    disabled={item.quantity <= 1}
                    className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="ml-4 p-1 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="font-bold">${item.price * item.quantity}.00</p>
            </div>
          ))}
          
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">
              Total: ${calculateTotal()}.00
            </p>
            <p className="text-gray-500">
              Total Items: {totalQuantity}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

