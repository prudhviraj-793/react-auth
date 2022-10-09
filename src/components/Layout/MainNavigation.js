import { Link, useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

  const history = useHistory()
  const token = localStorage.getItem(Object.keys(localStorage)[0]);

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.clear()
    history.replace('/')
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!token && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {token && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {token && (
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
