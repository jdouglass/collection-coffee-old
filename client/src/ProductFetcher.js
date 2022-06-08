import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api/products' : 'http://localhost:5000/api/products'

export default axios.create({
  baseURL
});