import { useCallback, useState } from "react";

import { baseApi } from "./useCallApi";

type configsType = {
  url: string,
  method: "post" | "put" | "delete",
  body?: object
}

export default function useFetchData()
{
  const [loader, setLoader] = useState(false); 
  const fethcer = useCallback(async ({ url, method, body}: configsType) =>
  {
    if(method === "post" && body == null || method === "put")
    {
      throw new Error("body most not be empty!");
    }

    const bodyString = JSON.stringify(body)
    const config = {
      url,
      method,
      data: bodyString,
    }
    const instanceApi = baseApi.create();

    setLoader(true);
    try
    {
      const res = await instanceApi(config)
      if(res.status < 400)
      {
        console.log(res.data);
      }
    }
    catch (error)
    {
      
    } 
    finally
    {
      setLoader(false);
    }
  }, []);

  return { fethcer, loader }
} 