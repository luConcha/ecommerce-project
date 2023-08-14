import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, ProductDetail } from '@/pages';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  );
};
export default RoutesIndex;
