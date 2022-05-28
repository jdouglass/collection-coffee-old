const axios = require('axios');

module.exports = axios.create({
  baseURL: 'http://localhost:5000/products'
});