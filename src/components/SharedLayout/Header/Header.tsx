import { NavLink } from 'react-router-dom';
import css from './Header.module.scss';

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
