import { useEffect, useState } from "react";
import facade from "../facades/loginFacade";

export const Login = () => {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data));
  }, [isLoggedIn]);

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(
      loginCredentials.username,
      loginCredentials.password,
      setIsLoggedIn
    );
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
                <button onClick={() => facade.logout(setIsLoggedIn)}>
                  {" "}
                  LogOut
                </button>

                {dataFromServer.map((users) => (
                  <p key={users.id}>{users.username}</p>
                ))}
              </div>
            ) : (
              <p>Log på for at være med</p>
            )}
          </div>
        </h1>
      </div>
    </>
  );
};

export default Login;
