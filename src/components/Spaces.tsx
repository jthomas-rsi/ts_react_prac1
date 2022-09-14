import React from "react";
import { DataService } from "../services/DataService";
import { Space } from '../types/Types'
import { RentalSpace } from "./RentalSpace";
import { ResModal } from './ResModal'

//create state and props of component 
interface SpacesState {
    spaces: Space[];
    showModal: boolean,
    modalContent: string
}
interface SpacesProps {
    dataService: DataService;
}


export class Spaces extends React.Component<SpacesProps, SpacesState> {
    
    constructor(props: SpacesProps){
        super(props)
        this.state = {
            spaces: [],
            showModal: false,
            modalContent: ''
        }

        this.reserveSpace = this.reserveSpace.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    private async reserveSpace(spaceId: string){
        const resResult = await this.props.dataService.reserveSpace(spaceId)
        if( resResult ){
            this.setState({
                showModal: true,
                modalContent: `You reserved the space with id ${ spaceId }: Your reservation number is ${ resResult }`
            })
        }
        else{
            this.setState({
                showModal: true,
                modalContent: `This space is NOT available id#: ${ spaceId }`
            })
        }

    }

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

    //method to close reservation modal
    private closeModal(){
        this.setState({
            showModal: false,
            modalContent: ''
        })
    } 

    render() {
        return(
            <div>
                <h1>These Space Are Rentable!</h1>
                    {this.renderSpaces()}
                    <ResModal 
                        close={ this.closeModal }
                        content={ this.state.modalContent }
                        show={ this.state.showModal }
                    />
            </div>
        )
    }



}