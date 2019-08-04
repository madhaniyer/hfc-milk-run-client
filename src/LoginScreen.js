import React, { Component } from 'react'
import Navbar from "./Navbar";
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginProvider } from './contexts/LoginContext';
import Login from './Login';
export default class LoginScreen extends Component {
  render() {
    return (
      <LoginProvider>
        <ThemeProvider>
          <PageContent>
            <Navbar />
            <Login />
          </PageContent>
        </ThemeProvider>
      </LoginProvider>
    )
  }
}
