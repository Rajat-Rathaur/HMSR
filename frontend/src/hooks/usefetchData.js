import { useEffect, useState } from 'react';
const hostUrl = process.env.SERVER_URL || 'http://localhost:4000';

const useFetchData = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        };

        const response = await fetch(hostUrl + path, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [path, token, refreshKey]);

  const refreshData = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return { data, setData, isLoading, error, refreshData };
};

export default useFetchData;
