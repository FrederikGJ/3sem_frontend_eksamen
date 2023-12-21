import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import { useState } from 'react'
import facade from '../facades/loginFacade';

export function Login() {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(loginCredentials.username, loginCredentials.password, setIsLoggedIn);
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
 

  return (
    <>
      <div>
      <Navibar />
      <div className="workforfucksake">
            <Menus />
        <h1>
          Login

          <form onChange={onChange}>
            <input placeholder="Username" id="username" />
            <input placeholder="Password" id="password" />
            <button onClick={performLogin}>Login</button>
      </form>
      <div>
        {isLoggedIn ? (
        <div> 
        <p>Du er logget ind, {facade.getUserRoles()}</p>
        <button onClick={() => facade.logout(setIsLoggedIn)}> LogOut</button>
        </div>
        ) : (
        <p>Log på for at kunne købe disse flotte smykker </p>)}
      </div>
        </h1>
      </div></div>
    </>
  )
}



