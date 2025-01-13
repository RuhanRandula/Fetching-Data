import { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200 range
          setError(`Error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response received
          setError('Network Error: No response received from server');
        } else {
          // Something else happened while setting up the request
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;