import { useState, useEffect, useRef } from 'react';

function useServerGoods() {
  const [goods, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const initLoad = useRef(true); 

  useEffect(() => {
    if (!initLoad.current && page === 0) {
      return;
    }

    const getItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch(`http://localhost:8080/api/items?page=${page}&size=10`);
        const data = await response.json();
        setItems((prevItems) => (page === 0 ? data : [...prevItems, ...data]));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        initLoad.current = false;
      }
    };

    getItems();
  }, [page]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return { goods, isLoading, error, loadMore };
}

export default useServerGoods;