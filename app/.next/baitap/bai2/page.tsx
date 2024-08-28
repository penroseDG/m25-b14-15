import React from 'react';

const ProductsPage = ({ products }) => {
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

// Sử dụng getServerSideProps để lấy dữ liệu SSR
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default ProductsPage;