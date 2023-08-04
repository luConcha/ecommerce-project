import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext';

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStoreContext debe ser usado dentro de StoreProvider');
  }
  return context;
};
