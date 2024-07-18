import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
