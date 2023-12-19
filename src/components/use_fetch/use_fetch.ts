import { useState, useEffect } from "react";
import { isError } from "../../helpers/is_error";

export interface SWAPIResponse {
  name: string;
}

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount/unmount

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (isMounted) {
          setIsFetching(false);

          if (response.status === 200) {
            const json = await response.json();
            setData(json);
          }
        }
      } catch (e: unknown) {
        if (isMounted) {
          setIsFetching(false);
          console.log(isError(e) ? e.message : "Unknown error!");
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isFetching };
};
