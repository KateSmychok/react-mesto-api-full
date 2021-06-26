import React from "react";
import logo from "../images/Logo.svg";
import { Route, Switch, Link } from "react-router-dom";

function Header(props) {
  return (
    <Switch>
    <Route exact path="/">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <div className="header__info">
          <p className="header__email">{props.email}</p>
          <button className="header__link header__link-sign-out button" onClick={props.onSignOut}>Выйти</button>
        </div>
      </header>
    </Route>
    <Route path="/sign-in">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Link to="/sign-up" className="header__link button">Зарегистрироваться</Link>
      </header>
    </Route>
    <Route path="/sign-up">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Link to="/sign-in" className="header__link button">Войти</Link>
      </header>
    </Route>
    </Switch>
  )
}

export default Header;