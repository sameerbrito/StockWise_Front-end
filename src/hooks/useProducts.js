import { useState, useEffect } from 'react';
import { getProducts, createProduct } from '@api/productService';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza la solicitud GET para obtener la lista de productos
    getProducts()
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });
  }, []);

  const addProduct = (productData) => {
    // Realiza la solicitud POST para crear un nuevo producto
    createProduct(productData)
      .then((response) => {
        // Agrega el nuevo producto a la lista actual de productos
        setProducts([...products, response.data]);
      })
      .catch((error) => {
        console.error('Error al crear producto:', error);
      });
  };

  return { products, loading, addProduct };
};

export default useProducts;