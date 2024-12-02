import { useQuery, useMutation, useQueryClient } from "react-query";
// import axios from "axios";
import { request } from "../utils/axios.utils";

const getData = () => {
  return request({ url: "/get-products" });
};

const addPost = (post) => {
  return request({ url: "/posts", method: "post", data: post });
};

const addToCart = ({ userId, productId, size }) => {
  const url = `/add-to-cart/${userId}/${productId}`;
  return request({ url, method: "post", data: { size } });
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
      // console.log(data.data.data);

      const transformData = data?.data?.data.map(e => e)
      return transformData;
    },
  });
};

export default UseQueryCustomHook;

export const useAddPostData = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    // onSuccess: (data) => {
    //   // This makes a get reguest to the key "rq-endpoint" immediately the post request is successful
    //   // queryClient.invalidateQueries("rq-endpoint");
    //   queryClient.setQueryData("rq-endpoint", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },

    // Here we want to make use og Optimitic Updates
    onMutate: async (newPost) => {
      await queryClient.cancelQueries("rq-endpoint");
      const previousPostData = queryClient.getQueryData("rq-endpoint");
      queryClient.setQueryData("rq-endpoint", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newPost },
          ],
        };
      });
      return {
        previousPostData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueriesData("rq-endpoint", context.previousPostData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("rq-endpoint");
    },
  });
};


export const useAddToCart = ()=>{
  return
}
