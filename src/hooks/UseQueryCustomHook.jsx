import { useQuery, useMutation, useQueryClient } from "react-query";
// import axios from "axios";
import { request } from "../utils/axios.utils";

const getData = () => {
  return request({ url: "/get-products" });
};

// const addPost = (post) => {
//   return request({ url: "/posts", method: "post", data: post });
// };

const addToCart = ({ userId, productId, size }) => {
  console.log(userId, productId, size);

  const url = `/add-to-cart/${userId}/${productId}`;
  return request({
    url,
    method: "post",
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

export const useAddToCart = () => {
  return useMutation(addToCart);
};
