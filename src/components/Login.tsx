import React, { ChangeEvent, SyntheticEvent } from "react";
// import AuthService
import { AuthService } from "../services/AuthService";
import { User } from "../types/Types";
import history  from '../utils/history'

// define key values of component intial state and props
interface LoginProps {
  authService: AuthService;
  setUser:( user: User) => void;
}
interface LoginState {
  userName: string;
  password: string;
  LoginAttempted: boolean;
  loginSuccesfull: boolean;
}

// create and export Login Component
export class Login extends React.Component<LoginProps, LoginState> {
  //intialize intiail state values
  state: LoginState = {
    userName: "",
    password: "",
    LoginAttempted: false,
    loginSuccesfull: false,
  };

  //create local functions for respodning to Login form events
  //set User Name to state
  private setUserName(event: ChangeEvent) {
    this.setState({ userName: (event.target as HTMLInputElement).value });
  }
  
  //set User password to state
  private setPassword(event: ChangeEvent) {
    this.setState({ password: (event.target as HTMLInputElement).value });
  }
  
  // handle form submission
  private async handleSubmit(event: SyntheticEvent) {
    //prevent Login component for re-rendering
    event.preventDefault();

    // update loginAttempted prop
    this.setState({ LoginAttempted: true });

    // use authService service worker to Login with form data
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    // log result of login attempt
    //update LoginState loginSuccesfull value
    if (result) {
      // console.log(result);
      // update login flag to true
      this.setState({ loginSuccesfull: true });
      // set User state value
      this.props.setUser(result)
      //redirect user to rpfile page after succesful login attempt
      history.push('/profile')

    } else {
      console.log("Inccorect Login");
      this.setState({ loginSuccesfull: false });
    }
  }

  //render Login Component with Form to capture data
  render() {
    //define login sucess message
    let loginMessage: any;
    if (this.state.LoginAttempted) {
      if (this.state.loginSuccesfull) {
        loginMessage = <div> You're all good</div>;
      } else {
        loginMessage = <div> Try again </div>;
      }
    }

    return (
      <div>
        <h1>Please Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
          ></input>
          <br />
          <input
            type="pasword"
            value={this.state.password}
            onChange={(e) => this.setPassword(e)}
          ></input>
          <br />
          <button type="submit" value={"Login"}>Login</button>
        </form>
        {loginMessage}
      </div>
    );
  }
}
