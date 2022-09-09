import React, { ReactElement } from "react";

//image import
import officeBuilding1 from '../assets/officeBuilding1.jpg';

//styling import
import '../styles/rentalSpace.css'

//interface for SpacesComp props
interface rentalSpaceProps {
    spaceId: string, 
    spaceName: string,
    address: string,
    photoUrl?: string,
    reserveSpace: (spaceId: string) => void // fucntion to alow user to reserve a meeting space or building on Spaces page
}


export class RentalSpace extends React.Component<rentalSpaceProps> {

    //private method to render space image 
    private renderImage(){
        if( this.props.photoUrl ){
            return <img src={this.props.photoUrl} alt='frontal view of rental space'/>
        }
        else{
            return <img src={officeBuilding1} alt='frontal view of rental space'/>
        }
    }


    render() {
        return(
            <div className="spaceComponent">
                {this.renderImage()}<br/>
                <label className="name" >{this.props.spaceName}</label><br/>
                <label className="spaceId" >{this.props.spaceId}</label><br/>
                <label className="address" >{this.props.address}</label><br/>
                <button onClick={ ()=> this.props.reserveSpace(this.props.spaceId) } >Reserve Space</button>
            </div>
        )
    }
}