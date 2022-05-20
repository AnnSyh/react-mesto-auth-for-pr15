import React from 'react';
import { useState, useEffect } from 'react';
// import CurrentUserContext from '../contexts/CurrentUserContext';
// import * as auth from '../utils/auth';



const Login = ({ handleLogin }) => {
  // const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext

  const [userData, setUserState] = useState({
    password: '',
    email: '',
  });
  const [message, setMessage] = useState('')
  const { email, password } = userData


  function handleChange(e) {
    const { name, value } = e.target;
    setUserState({
      ...userData,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    handleLogin(email, password)
  }

  return (
    <div className="sign-up">
      <form
        className="form popup__form popup__form_inverse form__sign-up"
        title='Авторизация'
        name='form-registration'
        onSubmit={handleSubmit}
      >
        <div>
          <div className="form__field">
            <span className="popup__input-error place-title-input-error">
              {message}
            </span>
          </div>
          <h2 className="page-title popup__page-title  text-overflow text-center">Вход (Авторизация)</h2>
          <div className="form__field">
            <input
              id="mail-input"
              required
              name="email"
              type="text"
              placeholder="E-mail"
              className="popup__input popup__input_mail"
              minLength="2"
              maxLength="30"
              value={email}
              onChange={handleChange}
            />
            <span className="popup__input-error place-title-input-error"></span>

          </div>
          <div className="form__field">
            <input
              id="pass-input"
              required
              name="password"
              type="password"
              placeholder="Пароль"
              className="popup__input popup__input_pass"
              value={password}
              onChange={handleChange}
            />
            <span className="popup__input-error place-title-input-error"></span>
          </div>
        </div>
        <div className="form__field m-0">
          <button
            className="popup__btn"
            name="btn"
            type="submit"
          >Войти</button>
        </div>
      </form>

    </div>
  );
}

export default Login;
