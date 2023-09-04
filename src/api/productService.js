import axiosInstance from '@api/config';

export const getProducts = () => {
  return axiosInstance.get('/products/getProducts');
};

export const createProduct = (productData) => {
  return axiosInstance.post('/products', productData);
};