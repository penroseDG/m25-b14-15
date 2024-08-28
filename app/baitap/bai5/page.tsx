import React, { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Danh Sách Sản Phẩm</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <h2 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h2>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;