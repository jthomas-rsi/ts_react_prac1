import React from 'react';
// import of User type interface 
import { User } from '../types/User'
//import class AuthService from local authentication
import { AuthService } from '../services/AuthService' 
//import Login app
import { Login } from './Login'

// creater intial state for App component
interface AppState {
  user: User | undefined
}


export class App extends React.Component<{}, AppState> {

  //intialize new authservice object for child components
  private authservice: AuthService = new AuthService();
  
  render(){
    return(
      <div>
        <Login authService={this.authservice}/>
        Class App Working!
      </div>
    )
  }

}

// function App() {
//   return (
//     <div>
//       App Working
//     </div>
//   );
// }

// export default App;
