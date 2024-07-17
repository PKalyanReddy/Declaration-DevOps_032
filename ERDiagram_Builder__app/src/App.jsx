// src/App.jsx
import React from "react";
import NavigationBar from "./components/Authentication/NavigationBar";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar />
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <div className="Lorem">
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/301" alt="" />
            <img src="https://picsum.photos/200/302" alt="" />
            <img src="https://picsum.photos/200/303" alt="" />
            <img src="https://picsum.photos/200/304" alt="" />
            <img src="https://picsum.photos/200/305" alt="" />
            <img src="https://picsum.photos/200/306" alt="" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
