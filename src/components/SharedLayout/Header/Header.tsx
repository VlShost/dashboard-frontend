import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';

import css from './Header.module.scss';

const Header = () => {
  const { logout } = useAuthContext();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/auth/signin">Sign In</NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="/companies">Companies</NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="/profile">Profile</NavLink>
          </li>

          <li className={css.navItem}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li className={css.navItem}>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
