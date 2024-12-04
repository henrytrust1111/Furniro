import React, { useState } from "react";
import { createContext } from "react";
import UseQueryCustomHook, { useViewCart } from "../hooks/UseQueryCustomHook";
import { useDispatch } from "react-redux";
import { DB } from "../Global/Features";

export const MyContext = createContext(null);
const Context = ({ children }) => {
  const dispatch = useDispatch();
  const [noProducts, setNoProducts] = useState();

  const onSuccess = (data) => {
    if (data?.length === 0) {
      setNoProducts(true);
    } else {
      setNoProducts(false);
      dispatch(DB(data));
    }
  };

  const onError = (error) => {
    console.log("An Error occurred", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    UseQueryCustomHook(onError, onSuccess);

  const { isLoading: isLoadingCart, data: cart } = useViewCart(
    onError,
    onSuccess
  );

  console.log(data);
  

  return (
    <MyContext.Provider
      value={{
        isLoading,
        refetch,
        error,
        noProducts,
        data,
        cart,
        isLoadingCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
