import React from "react";
import { Space } from "../types/Types";

//data service worker class and it's methods  
export class DataService {
    
    // method to retrieve rental space data objects
    public async getSpaces(): Promise <Space[]>{
        const result: Space[] = []
        //push dummy data into result array for Spaces component to render
        result.push({
            spaceId: '123',
            spaceName: 'The Awesome Building',
            address: 'Jackson, MS',
        },
        {
            spaceId: '124',
            spaceName: 'The Cool Building',
            address: 'Jackson, MS',
        },
        {
            spaceId: '125',
            spaceName: 'The Hot Building',
            address: 'Jackson, MS',
        }

        )
        return result
    }

    //method that allows user to reseve a space 
    public async reserveSpace( spaceId: string): Promise < string | undefined > {
        if( spaceId === '125' ){
            return('5555')
        }
        else{
            return undefined
        }
    }


}