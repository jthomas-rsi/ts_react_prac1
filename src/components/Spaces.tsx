import React from "react";
import { DataService } from "../services/DataService";
import { Space } from '../types/Types'
import { RentalSpace } from "./rentalSpace";


//create state and props of component 
interface SpacesState {
    spaces: Space[];
}
interface SpacesProps {
    dataService: DataService;
}


export class Spaces extends React.Component<SpacesProps, SpacesState> {
    
    constructor(props: SpacesProps){
        super(props)
        this.state = {
            spaces: []
        }

        this.reserveSpace = this.reserveSpace.bind(this);
    }

    async componentDidMount(){
        //retrieve list of rental spaces
        const spaces = await this.props.dataService.getSpaces();
        // insert list of spaces into component state object
        this.setState(
            {
                spaces: spaces
            }
        )
    }

    private reserveSpace(spaceId: string){}

    private renderSpaces(){
        const rows: any[] = []
        for( const space of this.state.spaces){
            rows.push(
                <RentalSpace
                spaceId={space.spaceId} 
                spaceName={space.spaceName}
                address={space.address}
                reserveSpace={this.reserveSpace}
                />
            )
        }
        return rows;
    }

    render() {
        return(
            <div>
                <h1>These Space Are Rentable!</h1>
                
                     {this.renderSpaces()}
            </div>
        )
    }



}