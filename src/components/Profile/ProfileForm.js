import { useContext, useRef } from 'react';
import Context from '../Context/Context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const ctx = useContext(Context)
  const inputRef = useRef('')
  async function submitNewPsswd(e) {
    e.preventDefault()
    console.log(inputRef.current)
    const newPsswd = {
      idToken: ctx.token,
      password: inputRef.current,
      returnSecureToken: true
    }
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDIjyjQ6M013PJW8caCRVUkxwanZr-Fo-o', {
      method: 'POST',
      body: JSON.stringify(newPsswd),
      headers: {
        'Content-Type': 'application/json'
      } 
    })
    const data = await response.json()
    console.log(data)
  }
  function inputHandler(e) {
    e.preventDefault()
    inputRef.current = e.target.value
  }
  return (
    ctx.token && <form onSubmit={submitNewPsswd} className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='new-password'>New Password</label>
      <input ref={inputRef} type='password' id='new-password' onChange={inputHandler} />
    </div>
    <div className={classes.action}>
      <button type='submit'>Change Password</button>
    </div>
  </form>
  );
}

export default ProfileForm;
