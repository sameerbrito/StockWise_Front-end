// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useProducts from '@hooks/useProducts';

const ProductsTableComponent = () => {
  const { products, loading } = useProducts();

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      {loading ? (
        <div>Cargando productos...</div>
      ) : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsTableComponent;