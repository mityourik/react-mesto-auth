import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister, isPreloading }) {

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e) {
    const { name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
    });

    if (name === "email") {
      if (!value.includes("@")) {
        setEmailError("Email должен содержать @");
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        setPasswordError("Пароль должен содержать минимум 8 символов");
      } else {
        setPasswordError("");
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = userData;
    setIsLoading(true);
    onRegister(password, email);// вызов функции с данными пользователя для передачи
    if (!emailError && !passwordError) {
      onRegister(password, email);
    }
  }

  return (
    <div className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form name="register" className="authorization__form" onSubmit={handleSubmit}>
        <input
          id="authorization-email"
          type="email"
          name="email"
          className="authorization__input"
          placeholder="Email"
          onChange={handleChange}
          value={userData.email}
          required />
        <span
          className="authorization__span"
          id="authorization-email-error" 
        >
          {emailError}
        </span>
        <input
          id="authorization-password"
          type="password"
          name="password"
          className="authorization__input"
          placeholder="Пароль"
          onChange={handleChange}
          value={userData.password}
          required />
        <span
          className="authorization__span"
          id="authorization-password-error"
        >
          {passwordError}
        </span>
        <button
          className="authorization__submit-button"
          type="submit"
        >
          {isPreloading ? "Загрузка..." : "Зарегистрироваться"}
        </button>
        <Link className="authorization__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  )
}

export default Register;