import React from "react";
import { Link } from 'react-router-dom'

//import User type from local folder
import { User } from '../types/User'


export class Navbar extends React.Component<{ user: User | undefined }> {

    render(): React.ReactNode {
        //create variable for conditional rendering of Login and Logout components 
        let showLoginOrOut: any;
        
        //check the value of the user prop
        if( this.props.user ){
            // if user prop is not undefined 
            showLoginOrOut = <Link to='/logout' > { this.props.user.userName } </Link>
        }
        else{
            // if user prop is undefined
            showLoginOrOut = <Link to='/login' > { 'Login' } </Link>
        } 


        return (
            <div className="navbar">
                <Link to='/'> Home </Link>
                <Link to='/profile'> Profile </Link>
                { showLoginOrOut }
            </div>
        )
    }

}