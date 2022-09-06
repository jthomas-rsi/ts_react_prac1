import React from 'react';
// import of User tpye interface 
import { User } from '../types/User'

// creater intial state for App component
interface AppState {
  user: User | undefined
}


export class App extends React.Component {
  
  render(){
    return(
      <div>
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
