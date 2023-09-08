import React from 'react';
import { Link } from "react-router-dom";

function DropdownMenu({ email, signOut }) {
    return (
        <div className="header__dropdown-container">
            <p className="header__dropdown-email">{email}</p>
            <Link
                className="header__dropdown-link"
                to="/sign-in"
                onClick={signOut}>
                Выйти
            </Link>
        </div>
    );
}

export default DropdownMenu;
