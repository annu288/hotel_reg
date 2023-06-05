import React, { useRef } from "react";
import './signup.css'
export default function Signup(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const numberInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      mobile: numberInputRef.current.value,
    };

    props.addNewUser(user);
  };
  return (
 
       
      <div className="container">
        <form onSubmit={submitHandler}>
        <div className="login-box" >
            <h2>Signup</h2>
            
                <div className="user-box">
                    <input type="text" name="name" required="" ref={nameInputRef}/>
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required="" ref={ passwordInputRef}/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name="email" required="" ref={passwordInputRef}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="number" name="phoneNumber" required=""ref={numberInputRef}/>
                    <label>phoneNumber</label>
                </div>
                <button type="submit">SignUp</button>
                 <button onClick={props.pageHandler}>Login</button>
   
    </div>
       
     </form>
    </div>
  );
}