import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
  import {AccountCircleIcon} from "@mui/icons-material";
import {  BottomNavigationAction } from "@mui/material";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <BottomNavigationAction
      label="Logout"
      icon={<AccountCircleIcon />}
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutButton;
