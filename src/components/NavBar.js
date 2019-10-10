import React from 'react';
import { useAuth0 } from '../Auth/Auth0Context';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;
