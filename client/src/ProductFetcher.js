import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'products' : 'http://localhost:5000/products'

export default axios.create({
  baseURL
});