// Axios Interceptor
import axios from "axios";

const client = axios.create({ baseURL: "https://funiro-furnitures.onrender.com" });

export const request = ({ ...options }) => {
  const token = localStorage.getItem("token");
   console.log(token);
   
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // Additional catch errors and additional logging in here
    return error;
  };
  return client(options).then(onSuccess).catch(onError)
};
