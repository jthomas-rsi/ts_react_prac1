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

    //intailize Profile component state
    state: ProfileState = {
        userAttributes: []
    }

    //method to retrieve user attributes
    async componentDidMount(){
        //if user is signed in
        if( this.props.user ){
            // make async call for user attributes
            const userAtrs = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: userAtrs
            })
        }
        
    }

    //create method to retrieve user attributes
    private renderUserAttributes(){
        //create rows to render user data in table
        const rows = [];
        // loop through userAttribute array for table data
        for( const userAttribute of this.state.userAttributes ){
            //crete and push table rows with user data into rows array
            rows.push(
                <tr key={ userAttribute.Name }>
                    <td>{ userAttribute.Name }</td>
                    <td>{ userAttribute.Value }</td>
                </tr>
            )
        }


        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    } 

    render(): React.ReactNode {
        //create conditional render for user not logged in
        let showProfilePage: any;
        if( this.props.user ) {
            showProfilePage = 
                <div>
                    <h1>{`Hello ${this.props.user.userName}`}</h1>
                    { `Here are you attributes `}
                    {this.renderUserAttributes()}
                </div>
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