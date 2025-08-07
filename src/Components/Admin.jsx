import React, { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'https://medinova-backend.onrender.com';

function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountedprice: '',
    quantity: '',
    image: null,
  });

  const [products, setProducts] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/getproducts`);
      const data = await res.json();
      if (res.ok) {
        setProducts(data);
      } else {
        alert('Failed to fetch products.');
      }
    } catch (err) {
      console.error(err);
      alert('Error loading products.');
    }
  };

  const handleDelete = async () => {
    if (!currentProductId) return;

    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`${BASE_URL}/api/delete-product/${currentProductId}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      if (res.ok) {
        alert('Product deleted successfully!');
        resetForm();
        loadProducts();
      } else {
        alert(result.message || 'Delete failed.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while deleting.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      discountedprice: '',
      quantity: '',
      image: null,
    });
    setIsUpdateMode(false);
    setCurrentProductId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        submitData.append(key, value);
      }
    });

    try {
      const url = isUpdateMode
        ? `${BASE_URL}/api/products/${currentProductId}`
        : `${BASE_URL}/api/products`;
      const method = isUpdateMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: submitData,
      });

      const result = await res.json();
      if (res.ok) {
        alert(isUpdateMode ? 'Product updated successfully!' : 'Product added successfully!');
        resetForm();
        loadProducts();
      } else {
        alert(result.message || 'Operation failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred.');
    }
  };

  const handleEdit = (product) => {
    if (!product._id) {
      alert('Invalid product selected');
      return;
    }

    setFormData({
      name: product.name || '',
      description: product.description || '',
      price: product.price || '',
      discountedprice: product.discountedprice || '',
      quantity: product.quantity || '',
      image: null,
    });
    setIsUpdateMode(true);
    setCurrentProductId(product._id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Add / Update Product</h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="discountedprice"
          placeholder="Discounted Price"
          value={formData.discountedprice}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isUpdateMode ? 'Update Product' : 'Add Product'}
        </button>
        {isUpdateMode && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Delete Product
          </button>
        )}
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded shadow overflow-hidden cursor-pointer"
              onClick={() => handleEdit(product)}
            >
              <img
                src={
                  product.imageUrl
                    ? `${BASE_URL}${product.imageUrl}`
                    : 'https://via.placeholder.com/300x200?text=No+Image'
                }
                alt={product.name}
                className="w-full h-56 object-cover border-b"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">{product.name}</h5>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 text-sm">
                  <strong>Price:</strong> ${product.price}
                </p>
                {product.discountedprice && (
                  <p className="text-sm text-gray-500 line-through">
                    <strong>Discounted:</strong> ${product.discountedprice}
                  </p>
                )}
                <p className="text-sm">
                  <strong>Quantity:</strong> {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
