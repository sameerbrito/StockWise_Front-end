import { useState, useEffect  } from 'react';
import { Link, Outlet, useLocation  } from 'react-router-dom';
import { BsHouseDoor, BsPencil, BsBoxArrowInRight, BsFillPersonFill } from 'react-icons/bs';

const Header = () => {
  const [current, setCurrent] = useState('h');
  const [loggedIn, setLoggedIn] = useState(false); // Cambia esto según la lógica de autenticación de tu aplicación
  const location = useLocation();

  const onClick = (key) => {
    setCurrent(key);
  };

  const handleLogout = () => {
    // Aquí deberías implementar la lógica para realizar el logout
    setLoggedIn(false);
  };

  useEffect(() => {
    if (location.pathname === '/products') {
      setCurrent('p');
    }else if (location.pathname === '/register') {
      setCurrent('r');
    }else if (location.pathname === '/login') {
      setCurrent('r');
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="text-2xl font-bold mr-5">
              Tailwind Navbar
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  onClick={() => onClick('h')}
                  className={`hover:text-blue-500 ${current === 'h' && 'text-blue-500'}`}
                >
                  <BsHouseDoor className="inline-block" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => onClick('p')}
                  className={`hover:text-blue-500 ${current === 'p' && 'text-blue-500'}`}
                >
                  <BsPencil className="inline-block" /> Products
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-4 ml-auto">
              {loggedIn ? (
                <li className="relative group">
                  <button className="text-blue-500 hover:text-white">
                    <BsFillPersonFill className="inline-block" />
                  </button>
                  <ul className="absolute hidden group-hover:block bg-gray-700 text-white right-0 mt-2 space-y-2">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/register"
                      onClick={() => onClick('r')}
                      className={`hover:text-blue-500 ${current === 'r' && 'text-blue-500'}`}
                    >
                      <BsFillPersonFill className="inline-block" /> Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={() => onClick('l')}
                      className={`hover:text-blue-500 ${current === 'l' && 'text-blue-500'}`}
                    >
                      <BsBoxArrowInRight className="inline-block" /> Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
