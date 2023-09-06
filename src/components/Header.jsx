import React, { useState } from 'react';
import headerLogo from '../images/header__logo.svg';
import headerNavbarIcon from '../images/header__navbar-icon.svg';
import { useLocation, Link } from "react-router-dom";
import DropdownMenu from './DropdownMenu';

function Header({ email, signOut, loggedIn }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);//состояние выпадающего меню

  const path = (location.pathname === '/sign-in') ? '/sign-up' : 'sign-in';
  const linkName = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={headerLogo} alt="Лого Место" className="header__logo" />
      { loggedIn
        ? (
          <div className="header__logout-container">
            <button className="header__navbar-button" onClick={toggleMenu}>
              <img className="header__menu-icon" src={headerNavbarIcon} alt="Иконка Меню" />
            </button>
              <div className="header__dropdown-menu">
                <p className="header__email">{email}</p>
                <Link
                  className="header__auth-link"
                  to="/sign-in"
                  onClick={signOut}>
                  Выйти
                </Link>
              </div>
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