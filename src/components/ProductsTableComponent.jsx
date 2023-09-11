// import { useState, useEffect } from 'react';
import useProducts from '@hooks/useProducts';
import '@styles/ProductsTableComponent.css';

const ProductsTableComponent = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4 mt-2">Productos</h2>
        {loading ? ( 
          <div className="text-gray-700">Cargando productos...</div>
        ) : (
          <div className="flex justify-center">
            <div className='border border-white rounded-lg bg-white' style={{ maxHeight: '450px' }}>
              <table className="min-w-full bg-white border border-white rounded-lg w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 ali text-left" style={{ width: '10%' }}>Nombre</th>
                    <th className="px-4 py-2 text-left" style={{ width: '40%' }}>Descripción</th>
                    <th className="px-4 py-2 text-center" style={{ width: '0%' }}>Precio</th>
                    <th className="px-4 py-2 text-center" style={{ width: '5%' }}>Stock</th>
                  </tr>
                </thead>
              </table>
              <div className='container-table' style={{ maxHeight: '90%', marginLeft: '-1px'}}>
                <table className="min-w-full bg-white rounded-lg w-full" style={{ minWidth: '1200px' }}>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        key={index}
                        className={`transition-colors duration-300 hover:bg-gray-300`}
                      >
                        <td className="px-4 py-2" style={{ width: '10%' }}>{product.name}</td>
                        <td className="px-4 py-2" style={{ width: '40%' }}>{product.description}</td>
                        <td className="px-4 py-2 text-right" style={{ width: '0%' }}>${product.price}</td>
                        <td className="px-4 py-2 text-center" style={{ width: '5%' }}>{product.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsTableComponent;