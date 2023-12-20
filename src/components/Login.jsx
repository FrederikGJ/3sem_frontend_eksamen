import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import { useState, useEffect } from 'react'
import facade from '../facades/loginFacade';

export function Login() {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');

  useEffect(() => {
    facade.fetchData('hotels', 'GET').then((data) => setDataFromServer(data));
  }, [isLoggedIn]);

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
            <Menus />
        <h1>
          Login Demo 

          <form onChange={onChange}>
            <input placeholder="User Name" id="username" />
            <input placeholder="Password" id="password" />
            <button onClick={performLogin}>Login</button>
      </form>
      <div>
        {isLoggedIn ? (
        <div> 
        <p>Du er logget ind, {facade.getUserRoles()}</p>
        <button onClick={() => facade.logout(setIsLoggedIn)}> LogOut</button>

        {dataFromServer.map((hotel) => (
        <p key ={hotel.id}>{hotel.hotelName}</p>))}

        </div>
        ) : (
        <p>Log på for at være med</p>)}
      </div>
        </h1>
      </div>
    </>
  )
}



