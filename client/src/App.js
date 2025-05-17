import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-600">Time Capsule: Waste-to-Resource Hub</h1>
      <div className="mt-4">
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