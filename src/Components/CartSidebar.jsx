import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = 'https://medinova-backend.onrender.com';

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems = [],
  onRemoveFromCart,
  onIncrementQty,
  onDecrementQty,
  setCartItems,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    if (showCheckout) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.discountedprice * item.quantity,
        0
      );
      setTotalAmount(total);
    }
  }, [showCheckout, cartItems]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/getproducts/3`)
        const data = await res.json();
        setSuggestedProducts(data);
      } catch (err) {
        console.error("Failed to fetch suggestions", err);
      }
    };

    if (isOpen) {
      fetchSuggestions();
    }
  }, [isOpen]);

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.warning("Please log in to add items to your cart");
      return;
    }

    const exists = cartItems.find((item) => item._id === product._id);
    if (exists) {
      onIncrementQty(product._id);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart`);
  };

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // assuming it's stored in localStorage

    if (!user) {
      toast.warning("Please login before placing order");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          user,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Payment successful!");
        setCartItems([]);
        setShowCheckout(false);
      } else {
        toast.error(data.message || "Payment failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error during payment");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex justify-end transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`bg-white max-w-md w-full h-full flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute top-6 right-6 cursor-pointer" onClick={onClose}>
          <IoClose className="h-6 w-6 text-gray-600" />
        </div>

        <div className="border-b border-gray-200 p-4 text-center uppercase font-bold text-sm text-gray-800">
          Your Cart
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="px-5 py-4">
            <span className="text-sm text-gray-600 font-light">Add a note (optional)</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="px-5 py-10 border-b border-gray-200 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Your cart is empty</h3>
              <div className="text-sm text-gray-500 mb-6">
                Add your favorite items to your cart.
              </div>
            </div>
          ) : (
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={`${BASE_URL}${item.imageUrl}`}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => (e.target.src = "/placeholder.png")}
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Rs. {item.discountedprice}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => onDecrementQty(item._id)}
                          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onIncrementQty(item._id)}
                          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={() => onRemoveFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              {!showCheckout ? (
                <button
                  className="bg-black text-white w-full py-2 rounded"
                  onClick={() => setShowCheckout(true)}
                >
                  Checkout
                </button>
              ) : (
                <>
                  <div className="text-lg font-medium mb-2 text-center">
                    Total: Rs. {totalAmount}
                  </div>
                  <button
                    className="bg-green-600 text-white w-full py-2 rounded"
                    onClick={handlePayment}
                  >
                    Proceed to Payment
                  </button>
                </>
              )}
            </div>
          )}

          {/* Cart Footer Suggestions */}
          <div className="bg-gray-100 p-5">
            <h4 className="text-center text-sm text-gray-800 mb-4 font-medium">
              Customers who bought this item also bought
            </h4>

            {suggestedProducts.length === 0 ? (
              <p className="text-center text-sm text-gray-500">Loading suggestions...</p>
            ) : (
              suggestedProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center justify-center gap-4 border-b border-gray-200 py-5"
                >
                  <div className="w-28 flex-shrink-0">
                    <img
                      src={`${BASE_URL}${product.imageUrl}`}
                      alt={product.name}
                      className="w-full"
                      onError={(e) => (e.target.src = "/placeholder.png")}
                    />
                  </div>

                  <div className="flex-1 px-4">
                    <div className="text-sm font-medium text-gray-800">{product.name}</div>

                    <div className="flex text-xs mt-2 items-center text-gray-500">
                      <span className="text-green-500 font-semibold">
                        Rs. {product.discountedprice}
                      </span>
                      <span className="pl-4 line-through text-gray-400">
                        Rs. {product.originalprice}
                      </span>
                    </div>
                  </div>

                  <button
                    className="bg-black rounded-md w-24 h-10 text-white text-xs"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
