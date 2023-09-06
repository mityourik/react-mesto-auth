import React from 'react';
import headerLogo from '../images/header__logo.svg';
import { useLocation, Link } from "react-router-dom"

function Header({ email, signOut, loggedIn }) {
  const location = useLocation();

  const path = (location.pathname === '/sign-in') ? '/sign-up' : 'sign-in';
  const linkName = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';

  return (
    <header className="header">
      <img src={headerLogo} alt="Лого Место" className="header__logo" />
      { loggedIn
          ? (
            <div className="header__logout-container">
              <p className="header__email">{email}</p>
              <Link
                className="header__auth-link"
                to="/sign-in"
                onClick={signOut}>
                Выйти
              </Link>
            </div>
          )
          : (
            <Link
              className="header__auth-link"
              to={path}>
              {linkName}
            </Link>
          )
      }
    </header>
  );
}

export default Header;