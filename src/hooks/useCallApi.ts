import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";

type configType = {
  url: string,
  method: "get" | "post" | "put" | "delete",
  body: object | null
}

export const BASE_URL = "http://46.100.46.149:8069";
export const baseApi = axios;

export default function useCallApi(config: configType, runner: boolean)
{
  const { url, method, body } = config;
  
  // axios configs 
  const memoBaseApi = useMemo(() =>
  {
    baseApi.defaults.baseURL = BASE_URL;
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
      setLoader(true);
      const callApi = await memoBaseApi[method](url);
      if(callApi.status < 400)
      {
        setData(callApi.data);
      }
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
