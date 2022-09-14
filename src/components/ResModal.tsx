import React from "react";
//style import
import '../styles/resModal.css'


//interface for component props
interface ResModalProps {
    show: boolean,
    content: string,
    close: () => void
}


export class ResModal extends React.Component<ResModalProps>{

    render(){
        if( !this.props.show ){
            return null
        }
        else{
            return(
                <div className="modal" >
                <div className="modal-content">
                    <h1>You tried to reserve the space ....</h1>
                    <h2 className="modalText">{ this.props.content }</h2>
                    <button onClick={ () => this.props.close() } > Close</button>
                </div>

            </div>
        )
    }
    }

}