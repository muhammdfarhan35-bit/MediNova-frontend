import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://medinova-backend.onrender.com";

function SignUp({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${BASE_URL}/api/signup`, form);
    toast.success(res.data.message);
    onClose(); 
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      toast.error(err.response.data.message);
    } else {
      toast.error('Signup failed.');
    }
  }
};

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-[90%] max-w-md bg-white p-8 rounded-xl shadow-lg">
        <button
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-sm"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-[#94d0a8] text-[#13171a] font-bold text-base py-3 mt-6 rounded-full border-2 border-[#94d0a8] hover:bg-gray-100"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
