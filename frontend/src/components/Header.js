import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from '../images/Logo.svg';

function Header(props) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <div className="header__info-top">
            <p className="header__email">{props.email}</p>
            <button className="header__link header__link-sign-out button" onClick={props.onSignOut}>Выйти</button>
          </div>
          <img className="header__logo" src={logo} alt="Логотип"/>
          <div className="header__info">
            <p className="header__email">{props.email}</p>
            <button className="header__link header__link-sign-out button" onClick={props.onSignOut}>Выйти</button>
          </div>
        </header>
      </Route>
    <Route path="/signin">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Link to="/signup" className="header__link button">Зарегистрироваться</Link>
      </header>
    </Route>
    <Route path="/signup">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Link to="/signin" className="header__link button">Войти</Link>
      </header>
    </Route>
    </Switch>
  );
}

export default Header;
