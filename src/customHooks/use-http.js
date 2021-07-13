import { useState,useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.header ? requestConfig.header : {},
      });
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();
      applyData(data);
      setIsLoading(false)
      setHasError(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(error);
      console.log(error.message || "Something went wrong!");
    }
  },[applyData]);
  console.log("requesting")
  return { isLoading, hasError, sendRequest };
};

export default useHttp;
