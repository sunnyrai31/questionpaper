import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    makeApiCall(url);
  }, [url]);

  const makeApiCall = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response is not okay");
      }

      const newData = await response.json();
      console.log(newData);
      setData(newData);
    } catch (error) {
      console.error("Something went wrong:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, isLoading };
};

export default useFetchData;
