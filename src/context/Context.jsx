import React, { useEffect, useState } from "react";
import { createContext } from "react";
import UseQueryCustomHook, {
  useAddToCart,
  useViewCart,
} from "../hooks/UseQueryCustomHook";
import { useDispatch } from "react-redux";
import { DB } from "../Global/Features";
import { Cart } from "../Global/Features";

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

  const onSuccessCart = (data) => {
    dispatch(Cart(data));
  };

  const onError = (error) => {
    console.log("An Error occurred", error);
  };
  const { isLoading, data, error, refetch } = UseQueryCustomHook(
    onError,
    onSuccess
  );

  const {
    isLoading: isLoadingCart,
    data: cart,
    refetch: refetchCart,
  } = useViewCart(onError, onSuccessCart);



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
        refetchCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
