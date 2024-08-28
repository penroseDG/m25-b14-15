import React, { useState } from 'react';
import axios from 'axios';

const ProductsPage = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [error, setError] = useState(null);

  const handleFilter = async () => {
    try {
      const response = await axios.get('/api/products/filter', {
        params: {
          minPrice: minPrice || 0,
          maxPrice: maxPrice || 10000, // default max price
        },
      });
      setProducts(response.data);
    } catch (err) {
      setError('Failed to filter products');
    }
  };

  return (
    <div>
      <h1>Danh Sách Sản Phẩm</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Giá tối thiểu:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ marginRight: '10px' }}
          />
        </label>
        <label>
          Giá tối đa:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ marginRight: '10px' }}
          />
        </label>
        <button onClick={handleFilter}>Lọc</button>
      </div>

      {error && <p>{error}</p>}

      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              margin: '10px',
              border: '1px solid #ddd',
              padding: '10px',
              width: '200px',
            }}
          >
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h2>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      initialProducts: products,
    },
  };
}

export default ProductsPage;