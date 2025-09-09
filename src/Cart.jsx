import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "./Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="mt-[100px] p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <button
        className="mb-6 px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <p className="mt-6 text-gray-500 text-lg">Your cart is empty 😢</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              {/* Product Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain mb-4"
                />
              )}

              {/* Product Title */}
              <h2 className="text-lg font-semibold mb-2 text-center">
                {item.title || "No title"}
              </h2>

              {/* Product Price */}
              <p className="text-gray-700 font-bold mb-3">
                ${item.price || "0.00"}
              </p>

              {/* Extra Info */}
              <p className="text-sm text-gray-500 text-center line-clamp-2">
                {item.description || ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
