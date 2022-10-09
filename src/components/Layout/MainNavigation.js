import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Context from "../Context/Context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

  const ctx = useContext(Context);
  const history = useHistory()

  function logoutHandler(e) {
    e.preventDefault();
    ctx.removeToken();
    history.replace('/')
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!ctx.token && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {ctx.token && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {ctx.token && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
