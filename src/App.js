import React from 'react';
import Routes from './Routes';
//import PageContent from "./PageContent";
//import { ThemeProvider } from "./contexts/ThemeContext";
//import { LoginProvider } from "./contexts/LoginContext";
//import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941injectTapEventPlugin();
//import {LoginContext} from "./contexts/LoginContext";
//import { Auth } from "aws-amplify";
import './App.css';

function App(props)  {

/*const {isAuthenticated,isAuthenticating,toggleAuthenticated,toggleAuthenticating} = useContext(LoginContext);
  if(isAuthenticated===true)
    toggleAuthenticated();
  if(isAuthenticating===false)
    toggleAuthenticating();

  useEffect( () => {
    async function performAuth() {
      try {
        await Auth.currentSession();
        toggleAuthenticated();
      } catch(e) {
        if (e !== 'No current user') {
          alert("Please sign in again.");
        }
      }
      toggleAuthenticating();
    }
    performAuth();
  }); */

  return (
    <div className="App">
      <Routes />
    </div>
    
  );
  
  
}
export default App;