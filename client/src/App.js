import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: ''
  });

  // Fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Function to fetch items
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/items', formData);
      // Clear form after submission
      setFormData({ name: '', description: '', category: '' });
      // Refresh item list
      fetchItems();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-600">Time Capsule: Waste-to-Resource Hub</h1>

      {/* Form to create new items */}
      <div className="mt-6">
        <h2 className="text-2xl mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="e.g., Old Wooden Chair"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="e.g., Vintage chair, needs refinishing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="e.g., Furniture"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Add Item
          </button>
        </form>
      </div>

      {/* Item list */}
      <div className="mt-6">
        <h2 className="text-2xl">Items</h2>
        <ul className="mt-2">
          {items.map((item) => (
            <li key={item._id} className="p-2 border-b">
              <strong>{item.name}</strong>: {item.description} ({item.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;