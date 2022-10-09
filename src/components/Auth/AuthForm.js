import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submitHandler(event) {
    event.preventDefault()
    setIsLoading(true)
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value
    let url = ''
    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIjyjQ6M013PJW8caCRVUkxwanZr-Fo-o'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIjyjQ6M013PJW8caCRVUkxwanZr-Fo-o'
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setIsLoading(false)
        if(res.ok) {
          return res.json()
        } else {
          return res.json().then(data => {
            throw new Error(data.error.message)
          })
        }
      }).then((data) => {
        console.log(data)
      }).catch((err) => {
        alert(err)
      })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
