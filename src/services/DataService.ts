import React from "react";
import { Space } from "../types/Types";

//data service worker that retrieves rental space information 
export class DataService {
    
    public async getSpaces(): Promise <Space[]>{
        const result: Space[] = []
        //push dummy data into result array for Spaces component to render
        result.push({
            spaceId: '001',
            spaceName: 'The Awesome Building',
            address: 'Jackson, MS',
        },
        {
            spaceId: '002',
            spaceName: 'The Cool Building',
            address: 'Jackson, MS',
        },
        {
            spaceId: '003',
            spaceName: 'The Hot Building',
            address: 'Jackson, MS',
        }

        )
        return result
    }
}