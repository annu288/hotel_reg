import Login from "./components/front_page/Login";
import Signup from "./components/front_page/Signup";
import Frontp from "./components/front_page/Frontp"
import HotlesInfo from "./components/front_page/HotlesInfo";


import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  async function addUserHandler(user) {
    const response = await fetch(" http://localhost:3000/api/auth/signup ", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "aplication/json" },
    });
    const data = await response.json();
    console.log(data);
  }
  let content = <Login />;

  const loginPageHandler = () => {
    if (isLogin === true) {
      setIsLogin(false);
    }
    if (isLogin === false) {
      setIsLogin(true);
    }
  };

  if (isLogin === true) {
    content = <Login pageHandler={loginPageHandler} />;
  }
  if (isLogin === false) {
    content = (
      <Signup pageHandler={loginPageHandler} addNewUser={addUserHandler} />
    );
  }
  return (
    <div className="App">
      <Frontp/>
      <HotlesInfo />
      <header className="App-header">{content}</header>
    </div>
  );
}

export default App;
