import React from 'react';
import "../style/Cards.css";

function Podcast (){
   
        return (
            <div className="card">
                <img alt={this.props.name} src={this.props.link} />
                <div className="card-body">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description} </p>
                    <h5>{this.props.price}</h5>

                    <br />
                    <button class="button"> Listen Now!</button>
                </div>
            </div>

        )
    
}
export default Podcast;
