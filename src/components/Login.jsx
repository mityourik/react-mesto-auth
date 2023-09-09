import React, { useState } from "react";

function Login({ onLogin, isPreloading }) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;
    
    if (!emailError && !passwordError) {
      onLogin(password, email);
    }
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
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
      if (value.length < 6) {
        setPasswordError("Пароль должен содержать минимум 8 символов");
      } else {
        setPasswordError("");
      }
    }
  }

  return (
    <div className="authorization" >
      <h2 className="authorization__title">Вход</h2>
      <form name="login" className="authorization__form" onSubmit={handleSubmit} noValidate>
        <input
          id="authorization-email"
          type="email"
          name="email"
          className="authorization__input"
          placeholder="Email"
          value={formValue.email || ""}
          onChange={handleChange}
          required />
        <span
          className="authorization__span"
          id="authorization-email-error"
        >
            {emailError}
        </span>
        <input
          id="authorization-password-error"
          type="password"
          name="password"
          className="authorization__input"
          placeholder="Пароль"
          value={formValue.password || ""}
          onChange={handleChange}
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
          title="Войти"
        >
          {isPreloading ? "Загрузка..." : "Войти"}
        </button>
      </form>
    </div>
  )
}

export default Login;