import React, { ChangeEvent, SyntheticEvent } from "react";
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

  //create local functions for respodning to Login form events
  private setUserName( event: ChangeEvent ) {
    this.setState({ userName: (event.target as HTMLInputElement).value })
  }

  private setPassword( event: ChangeEvent ) {
    this.setState({ password: (event.target as HTMLInputElement).value })
  }

  private async handleSubmit( event: SyntheticEvent){
    //prevent Login component for re-rendering
    event.preventDefault();
    // use authService worker to Login with form data 
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    )
    // lof result of login attempt 
    if( result ){
      console.log( result )
    }
    else{
      console.log('Inccorect Login')
    }
  }

  //render Login Component with Form to capture data
    render() {
      return (
        <div>
          <h1> Please Login </h1>
          <form onSubmit={ e => this.handleSubmit(e) } >
            <input  type='text' value={ this.state.userName } onChange={ e=> this.setUserName(e) } ></input><br/>
            <input  type='pasword' value={ this.state.password } onChange={ e=> this.setPassword(e) } ></input><br/>
            <button type='submit' >Login</button>
          </form>
        </div>
      )
    }
  }