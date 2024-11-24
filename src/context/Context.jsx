import React, { useState } from "react";
import { createContext } from "react";
import UseQueryCustomHook from "../hooks/UseQueryCustomHook";
import { useDispatch } from "react-redux";
import { DB } from "../Global/Features";

export const MyContext = createContext(null);
const Context = ({ children }) => {
  const dispatch = useDispatch();
  const [noProducts, setNoProducts] = useState();

  // const onSuccess = (data) => {
  //   if (data.length === 0) {
  //     setNoProducts(true);
  //   }
  //   setNoProducts(false);
  // };

  const onSuccess = (data) => {
    if (data?.length === 0) {
      setNoProducts(true);
    } else {
      setNoProducts(false);
      dispatch(DB(data)); // Dispatching the fetched data
    }
  };

  const onError = (error) => {
    toast.error("An Error occurred", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    UseQueryCustomHook(onError, onSuccess);

  return (
    <MyContext.Provider value={{ isLoading, refetch, error, noProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
