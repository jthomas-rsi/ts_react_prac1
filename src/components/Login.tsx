import React from "react";
// import AuthService 
import { AuthService } from '../services/AuthService'

// define key values of component intial state and props  
interface LoginProps {
  authService: AuthService
}
interface LoginState {
  userName: string,
  password: string,
  LoginAttempted: boolean, 
  loginSuccesfull: boolean
}

// create and export Login Component
export class Login extends React.Component <LoginProps, LoginState > {

  //intialize intiail state values
  state: LoginState = {
    userName: '',
    password: '',
    LoginAttempted: false,
    loginSuccesfull: false

  }

    render() {
      return (
        <div> Login Working!! </div>
      )
    }
  }