import { useState, useEffect } from "react";
import axios from "axios";
               
const UseAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url,{
        params: {
            per_page: 24, // Fetch 20 images
          },
      });
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);
 

  return {
    response,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  };
};

export default UseAxios;