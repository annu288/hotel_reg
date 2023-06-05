import React from "react";
import './login.css'

export default function Login(props) {
  return (
    <div className="container">
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="user-box">
                <input type="text" name="username" required=""/>
                <label>Username</label>
            </div>
            <div className="user-box">
                <input type="password" name="password" required=""/>
                <label>Password</label>
            </div>
            <button type="submit">Login</button>
            {/* <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p> */}
            <button onClick={props.pageHandler}>Signup</button>
        </form>
    </div>
</div>
  );
}