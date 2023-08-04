import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useStoreContext } from '@/hooks/useStoreContext';
import logo from '@/assets/store-32.ico';
import shoppingCart from '@/assets/shopping-cart-32.ico';

const Header = () => {
  const { isAuth, logout } = useAuthContext();
  const { setSearch } = useStoreContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className='p-3' style={{ backgroundColor: '#e3f2fd' }}>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <NavLink
            to='/'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <img className='mb' src={logo} alt='' width='50' height='50' />
          </NavLink>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <NavLink to='/' className='nav-link px-2 text-secondary'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='nav-link px-2 text-secondary'>
                About
              </NavLink>
            </li>
            {/* <li className='nav-item dropdown'>
              <NavLink
                className='nav-link dropdown-toggle'
                to='/'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                role='button'
              >
                Categorias
              </NavLink>
              <ul className='dropdown-menu'>
                <li>
                  <NavLink
                    style={{ backgroundColor: 'white', color: 'gray' }}
                    className='dropdown-item'
                    href=''
                  >
                    lago
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ backgroundColor: 'white', color: 'gray' }}
                    className='dropdown-item'
                    href=''
                  >
                    lago
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ backgroundColor: 'white', color: 'gray' }}
                    className='dropdown-item'
                    href=''
                  >
                    lago
                  </NavLink>
                </li>
              </ul>
            </li> */}
          </ul>
          <form
            className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
            role='search'
          >
            <input
              type='search'
              className='form-control me-2'
              placeholder='Search...'
              aria-label='Search'
              onChange={handleSearch}
            />
          </form>
          <div className='text-end'>
            {isAuth ? (
              <>
                <NavLink
                  to='/login'
                  className='btn btn-secondary me-2'
                  onClick={logout}
                >
                  Logout
                </NavLink>
                <NavLink to='/' type='button' style={{ marginLeft: '20px' }}>
                  <img src={shoppingCart} alt='' width='32' height='32' />
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to='/login' className='btn btn-outline-primary me-2'>
                  Login
                </NavLink>
                <NavLink to='/signup' type='button' className='btn btn-info'>
                  Sign-up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
