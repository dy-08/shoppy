import { Link } from 'react-router-dom';
import { BiSolidCommentAdd } from 'react-icons/bi';
import { login, logout, onUserStateChange } from '../api/firebase';
import { useEffect, useState } from 'react';
import User from './User';
import Button from './ui/Button';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    // login().then((user) => setUser(user));
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BiSolidCommentAdd />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={handleLogin} />}
        {user && <Button text={'Logout'} onClick={handleLogout} />}
      </nav>
    </header>
  );
}
