import { useSelector } from "react-redux";
import Loading from "./loading/Loading";
import React from "react";

function WithLoading({ children }) {
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  console.log(isLoading);
  return <> {isLoading ? <Loading /> : children}</>;
}

export default WithLoading;
