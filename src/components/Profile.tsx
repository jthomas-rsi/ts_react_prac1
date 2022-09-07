import React from "react";
import { Link } from "react-router-dom";
import { AuthService } from "../services/AuthService";
import { User, UserAttribute } from "../types/Types";

//create intial state and props for Profile component 
interface ProfileState {
    userAttributes: UserAttribute[]
}

interface ProfileProps {
    user: User | undefined,
    authService: AuthService
}

//export Profile Component
//pass in intial component stat and props <Props, State>
export class Profile extends React.Component<ProfileProps, ProfileState> {

    render(): React.ReactNode {
        //create conditional render for user not logged in
        let showProfilePage: any;
        if( this.props.user ) {
            showProfilePage = <h1>{`Hello ${this.props.user.userName}`}</h1>
        }
        else{
            showProfilePage = 
                <div>
                    Please <Link to={'login'}> Login </Link>
                </div>
        }
        

        return (
            <div>
                User Profile page!
                {showProfilePage}
            </div>
        )
    }

}