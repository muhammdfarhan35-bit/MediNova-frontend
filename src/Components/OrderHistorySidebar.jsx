import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:5000';

const OrderHistorySidebar = ({ isOpen, onClose }) => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user._id) {
        console.warn("User not logged in or user._id missing");
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/api/orders/${user._id}`);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        toast.error("Failed to fetch order history");
      }
    };

    if (isOpen) fetchOrders();
  }, [isOpen, user]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-[9999] p-4 overflow-y-auto">
      <button onClick={onClose} className="text-xl font-bold mb-4 text-red-600">✕</button>
      <h2 className="text-lg font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, idx) => {
            const totalPrice = order.items.reduce(
              (sum, item) => sum + (item.discountedprice * item.quantity),
              0
            );
            return (
              <li key={idx} className="border p-2 rounded shadow-sm">
                <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Items:</strong></p>
                <ul className="list-disc list-inside text-sm">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.name} x {item.quantity} @ Rs. {item.discountedprice} each
                    </li>
                  ))}
                </ul>
                <p className="mt-2 font-semibold text-green-600">
                  Total: Rs. {totalPrice.toFixed(2)}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default OrderHistorySidebar;
