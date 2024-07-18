
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <BottomNavigationAction
      label="Login"
      icon={<AccountCircleIcon />}
      onClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;
