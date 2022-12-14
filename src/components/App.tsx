//dependcies 
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import local helpers  
import { User } from '../types/Types'
import { AuthService } from '../services/AuthService';
import history from '../utils/history';

// import local components
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';
import { Spaces } from '../components/Spaces'
import { DataService } from '../services/DataService';

// creater intial state for App component
interface AppState {
  user: User | undefined
}


export class App extends React.Component<{}, AppState> {

  //bind properties to component clas with constructor function
  constructor(props: any){
    super(props)

    this.state = {
      user: undefined
    }

    this.setUser = this.setUser.bind(this)
  }


  //intialize new authservice object for child components
  private authservice: AuthService = new AuthService();
  
  //intialize new dataService object for child components 
  private dataService: DataService = new DataService();

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
      <div className='wrapper'>
        <Router history={ history }>
          <div>
            <Navbar user={ this.state.user } />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' >
                <Login authService={this.authservice} setUser={this.setUser} />
              </Route>
              <Route exact path='/profile'>
                <Profile authService={this.authservice} user={this.state.user} />
              </Route>
              <Route exact path='/spaces' >
                <Spaces dataService={this.dataService}/>
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    )
  }

};