import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : `${styles.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
