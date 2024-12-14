import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
// import axios from "axios";
import { request } from "../utils/axios.utils";

const getData = () => {
  return request({ url: "/get-products" });
};
const getCart = () => {
  const userId = localStorage.getItem("userId");
  // console.log(userId);
  return request({ url: `/view-cart/${userId}` });
};

// const addPost = (post) => {
//   return request({ url: "/posts", method: "post", data: post });
// };

const addToCart = ({ userId, productId, size }) => {
  const url = `/add-to-cart/${userId}/${productId}`;
  return request({
    url,
    method: "post",
    data: size && size.length > 0 ? { size } : {},
  });
};

const removeFromCart = ({ userId, productId, size }) => {
  const url = `/remove-from-cart/${userId}/${productId}`;
  return request({
    url,
    method: "delete",
    data: size && size.length > 0 ? { size } : {},
  });
};

const UseQueryCustomHook = (onError, onSuccess) => {
  return useQuery("rq-endpoint", getData, {
    //   cacheTime: 5000,
    // The Default staleTime is zero seconds && and the default cacheTime is 5minutes
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always',
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    //   enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      const transformData = data?.data?.data.map((e) => e);
      return transformData;
    },
  });
};

export default UseQueryCustomHook;

export const useViewCart = (onSuccess) => {
  return useQuery("view-cart", getCart, {
    onSuccess,
    onError: (error) => {
      console.log(error);
    },
    select: (data) => {
      const cartMessage = data.response.status;
      const cartItems = data?.data?.data;
      console.log(cartItems);
      const status = JSON.stringify(cartMessage);
      if (status == "401") localStorage.removeItem("token");

      return cartItems;
    },
  });
};

export const useAddToCart = (onSuccess, onSettled) => {
  return useMutation(addToCart, {
    onSuccess,
    onSettled,
  });
};

export const useRemoveFromCart = (onSuccess) => {
  return useMutation(removeFromCart, {
    onSuccess,
  });
};
