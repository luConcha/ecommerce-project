import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesIndex from '@/routes/RoutesIndex';
import Header from '@/components/Header';
import { StoreProvider } from '@/context/StoreContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <StoreProvider>
            <Header />
            <RoutesIndex />
          </StoreProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
