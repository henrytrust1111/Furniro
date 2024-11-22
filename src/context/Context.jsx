import React, { useState } from "react";
import { createContext } from "react";
import UseQueryCustomHook from "../hooks/UseQueryCustomHook";
import { useDispatch } from "react-redux";

export const MyContext = createContext(null);
const Context = ({ children }) => {
  const dispatch = useDispatch();
  const [noProducts, setNoProducts] = useState();

  const onSuccess = (data) => {
    console.log("perform side effect after data fecting", data);
    if (data.length === 0) {
      setNoProducts(true);
    }
    setNoProducts(false);
  };

  const onError = (error) => {
    toast.error("An Error occurred", error);
    console.log("perform side effect after encountering error");
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    UseQueryCustomHook(onError, onSuccess);
  console.log(
    data?.map((e) =>
      e.category.categoryName === "Living" ? e : "not identifiable"
    )
  );

  console.log(data);
  
  

  return (
    <MyContext.Provider value={{}}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
