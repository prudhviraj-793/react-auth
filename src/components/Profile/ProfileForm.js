import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {

  const token = localStorage.getItem(Object.keys(localStorage)[0]);
  const history = useHistory();
  const inputRef = useRef("");

  async function submitNewPsswd(e) {
    e.preventDefault();
    const newPsswd = {
      idToken: token,
      password: inputRef.current,
      returnSecureToken: true,
    };
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDIjyjQ6M013PJW8caCRVUkxwanZr-Fo-o",
      {
        method: "POST",
        body: JSON.stringify(newPsswd),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    history.replace("/");
  }

  function inputHandler(e) {
    e.preventDefault();
    inputRef.current = e.target.value;
  }

  return (
    <form onSubmit={submitNewPsswd} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={inputRef}
          type="password"
          id="new-password"
          onChange={inputHandler}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
