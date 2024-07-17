// src/NavigationBar.jsx
import React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);
  const { isAuthenticated } = useAuth0();

  return (
    <BottomNavigation
      style={{ backgroundColor: "#f1f5ff", color: "black" }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <img src="Er-Logo.jpg" />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
      <BottomNavigationAction label="Contact" icon={<AccountCircleIcon />} />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </BottomNavigation>
  );
};

export default NavigationBar;
