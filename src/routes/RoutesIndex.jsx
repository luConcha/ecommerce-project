import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Admin, ProductDetail } from '@/pages';

// import { ShoppingCart } from '@/components/ShoppingCart';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  );
};
export default RoutesIndex;
