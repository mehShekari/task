import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";

type configType = {
  url: string,
  method: "get" | "post" | "put" | "delete",
  body: object
}

export default function useCallApi(config: configType, runner: boolean)
{
  const { url, method, body } = config;
  
  // axios configs 
  const memoBaseApi = useMemo(() =>
  {
    const baseApi = axios;
    baseApi.defaults.baseURL = "";
    baseApi.defaults.headers.common["Content-Type"] = "application/json";
    baseApi.defaults.headers.common.Accept = "application/json";

    if(method === "post" || method === "put")
    {
      const bodyString = JSON.stringify(body);
      memoBaseApi.defaults.data = bodyString
    }
    return baseApi;
  }, [method, body]);

  // states
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetcher = useCallback(async () =>
  {
    try
    {
      setLoader(false);
      const callApi = await memoBaseApi[method](url);


    } catch (error) {

    } finally {

      setLoader(false);
    }
  }, [])

  useEffect(() =>
  {
    runner && fetcher()
  }, [])

  return { data, setData, loader }
}
