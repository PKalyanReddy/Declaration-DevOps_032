// src/NavigationBar.jsx
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";

// import "./App.css";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);
  const { isAuthenticated } = useAuth0();

  return (
    <BottomNavigation
      style={{ backgroundColor: "purple", color: "black" }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <img src="Er-Logo,jpg" />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
      <BottomNavigationAction label="Contact" icon={<AccountCircleIcon />} />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </BottomNavigation>
  );
};

export default NavigationBar;
