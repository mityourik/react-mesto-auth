import React from 'react';
import { Link } from "react-router-dom";

function DropdownMenu({ email, signOut }) {
    return (
        <div className="header__dropdown-menu">
            <p className="header__email">{email}</p>
            <Link
                className="header__auth-link"
                to="/sign-in"
                onClick={signOut}>
                Выйти
            </Link>
        </div>
    );
}

export default DropdownMenu;
