import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  if(isAuthenticated){
    console.log(isAuthenticated)
    return children;
  }
//   else{
//     return <Navigate to={'/navbar'}/>
//   }
}

export default PrivateRoute