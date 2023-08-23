import { useState, createContext, useEffect } from 'react';
import { getAllItems } from '@/services/productServices';

const StoreContext = createContext();

function StoreProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems();
        if (response.status === 200) {
          setProducts(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItemData();
  }, []);

  const data = {
    products,
    loading,
    setSearch,
    search,
  };

  return (
    <StoreContext.Provider value={data}>{props.children}</StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
