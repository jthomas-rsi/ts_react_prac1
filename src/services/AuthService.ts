import React from 'react';
import { User, UserAttribute } from '../types/Types'
export class AuthService {

    // async method for authenticating user 
    public async login( userName: string, password: string ): Promise<User | undefined>{
        if( userName === 'user' && password === '1234' ) {
            return {
                userName: userName,
                email:'some@email.com'
            }

        }
        else{
            return undefined;
        }
    }

    // async method for retrieveing user Attributes
    public async getUserAttributes(user: User):Promise<UserAttribute[]> {
        const result: UserAttribute[] = [];
        result.push({
            Name: 'User',
            Value: 'James F. Thomas'
        }, 
        {
            Name: 'job',
            Value: 'Engineer'

        }, 
        {
            Name: 'age',
            Value: '38'

        }, 
        {
            Name: 'experience',
            Value: '3 years'

        });
        return result;
    }


};