import React, { useState } from "react";

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;
    onLogin(password, email);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
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
          id="authorization-email-error" />
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
          id="authorization-password-error" />
        <button
          className="authorization__submit-button"
          type="submit"
          title="Войти"
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default Login;