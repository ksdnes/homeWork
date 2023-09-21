import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = "https://rickandmortyapi.com/api";
export const AXIOS_METHOD = {
  GET: "GET",
};

export function doApiCall(
  method,
  uri,
  onSuccess,
  onFailure = false,
  data = undefined
) {
  axios({
    method,
    url: `${BASE_URL}${uri}`,
    data,
  })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      console.error(err);
      if (onFailure === false) {
        return;
      }
      onFailure(err?.response?.data?.error, err);
    });
}

export function useApi(method, uri, postData = undefined, deps = []) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiCallCallback = useCallback(
    (apiPostData) => {
      setLoading(true);
      doApiCall(
        method,
        uri,
        (responseData) => {
          setData(responseData);
          setError(false);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setData(false);
          setLoading(false);
        },
        apiPostData
      );
    },
    [method, setData, setError, setLoading, uri]
  );

  useEffect(() => {
    apiCallCallback(postData);
  }, [apiCallCallback, JSON.stringify(postData), ...deps]);

  return [data, loading, error, apiCallCallback];
}
