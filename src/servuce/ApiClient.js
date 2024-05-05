import axios from "axios";
export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API, // Adjust the port number as needed
  });