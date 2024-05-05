// src/services/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API , // Adjust the port number as needed
});

export default apiClient;
