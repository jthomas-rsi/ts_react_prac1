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

  //bind properties to component clas with constructor function
  constructor(props: any){
    super(props)

    this.setUser = this.setUser.bind(this)
  }


  //intialize new authservice object for child components
  private authservice: AuthService = new AuthService();

  //initialize setUser function from Login.tsx
  private setUser(user: User){ 
    //use setState to update user prop in state
    this.setState({
      user : user
    })
    // check value in log
    console.log(`The user was set ====> ${ user }`)
  } 
  
  render(){
    return(
      <div>
        Class App Working!
        <Login authService={this.authservice} setUser={this.setUser} />
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
