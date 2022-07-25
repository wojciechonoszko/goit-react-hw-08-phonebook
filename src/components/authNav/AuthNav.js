import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Login
      </NavLink>
    </nav>
  );
}
