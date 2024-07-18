// src/App.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from "./components/NavigationBar";


const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar/>
      {isAuthenticated ? (
        <div>
         <div className="Head">
          <h5>Welcome, {user.name}</h5>
          <h5>This is our landing page</h5>
          </div>
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
        <div>
          <h2>This is home page</h2>
        </div>
      )}
    </div>
  );
};

export default App;
