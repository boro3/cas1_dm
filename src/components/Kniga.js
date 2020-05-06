import React from 'react';

export class Kniga extends React.Component{

    render(){
        return(
            <div id='kniga'>
                {this.props.knigi.map((element,i)=>{
                    return(
                        <li key={i}>Kniga: {element} so reden broj:{i+1}</li>
                    )
                })}
            </div>
        )
    }
}