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
        <div>
          <h1> Please Login </h1>
          <form>
            <input value={ this.state.userName } type='text' ></input><br/>
            <input value={ this.state.password }  type='password' ></input><br/>
            <button type='submit' >Login</button>
          </form>
        </div>
      )
    }
  }