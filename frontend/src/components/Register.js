import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from '../utils/auth.js';
import InfoToolTip from "./InfoTooltip";

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(true);
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(email, password)
      .then((res) => {
        if (res) {
          setIsSuccess(true);
          setIsInfoToolTipOpened(true);
        } else {
          setIsSuccess(false);
          setIsInfoToolTipOpened(true);
        }
      });
  }

  function closeInfoToolTip() {
    setIsInfoToolTipOpened(false);
    if (isSuccess) {
      history.push("/sign-in");
    }
  }

  return (
    <div className="reg-auth">
      <div className="reg-auth__content">
        <h3 className="reg-auth__title">{props.title}</h3>
        <form name="register" className="reg-auth__form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email-register"
            name="email"
            className="reg-auth__input"
            type="email"
            placeholder="Email"
            minLength="6"
            maxLength="40"
            required
            autoComplete="off"/>
          <input
            value={password}
            onChange={handlePasswordChange}
            id="password-register"
            name="password"
            className="reg-auth__input"
            type="password"
            placeholder="Password"
            minLength="6"
            maxLength="15"
            required
            autoComplete="off"/>
          <button type="submit" className="button button_type_reg-auth ">{props.submitButtonText}</button>
        </form>
        <div className="reg-auth__to-sign-in">
          <p className="reg-auth__text">Уже зарегистрированы? &nbsp;</p>
          <Link to="/sign-in" className="reg-auth__link button">Войти</Link>
        </div>
      </div>
      <InfoToolTip name="infoToolTip" isOpened={isInfoToolTipOpened} onClose={closeInfoToolTip} isSuccess={isSuccess}/>
    </div>
  )
}

export default Register;

