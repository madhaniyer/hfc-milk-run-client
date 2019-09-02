import React from 'react';
import Routes from './Routes';
//import { Auth } from "aws-amplify";
//import {LoginContext} from "./contexts/LoginContext";
import Navbar from "./Navbar";
import './App.css';

function App(props)  {

/*const {isAuthenticated,isAuthenticating,toggleAuthenticated,toggleAuthenticating} = useContext(LoginContext);

  useEffect( () => {
    async function performAuth() {
      try {
        toggleAuthenticating(true);
        toggleAuthenticated(false);
        await Auth.currentSession();
        toggleAuthenticated(true);
      } catch(e) {
        if (e !== 'No current user') {
          alert("Please sign in again.");
        }
      }
      toggleAuthenticating(false);
    }
    performAuth();
  },[]);*/

  return (
    <div className="App">
        <Navbar />
        <Routes />
    </div>
    
  );
  
  
}
export default App;