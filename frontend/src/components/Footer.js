import React from "react";
import {Route, Switch} from "react-router-dom";

function Footer() {
  return (
  <Switch>
    <Route exact path="/">
      <footer className="footer">
        <p className="footer__copyright">&copy;{` Kate Smychok ${new Date().getFullYear()} Mesto Russia`}</p>
      </footer>
    </Route>
    <Route path="/sign-in">
      <footer className="footer footer-auth">
        <p className="footer__copyright">&copy;{` Kate Smychok ${new Date().getFullYear()} Mesto Russia`}</p>
      </footer>
    </Route>
    <Route path="/sign-up">
      <footer className="footer footer-auth">
        <p className="footer__copyright">&copy;{` Kate Smychok ${new Date().getFullYear()} Mesto Russia`}</p>
      </footer>
    </Route>
  </Switch>
  )
}

export default Footer;