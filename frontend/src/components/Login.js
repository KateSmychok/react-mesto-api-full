import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.handleAuthorize(email, password)
  }

  return (
    <div className="reg-auth">
      <div className="reg-auth__content">
        <h3 className="reg-auth__title">{props.title}</h3>
        <form name="login" className="reg-auth__form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email-login"
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
            id="password-login"
            name="password"
            className="reg-auth__input"
            type="password"
            placeholder="Password"
            minLength="6"
            maxLength="15"
            required
            autoComplete="off"/>
          <button type="submit" className="button button_type_reg-auth">{props.submitButtonText}</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
