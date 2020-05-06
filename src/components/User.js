import React from 'react';

export class User extends React.Component{

    render(){
        return(
            <div id='user'>
                {this.props.isTrue ? <h2>User:{this.props._user1.firstName} {this.props._user1.lastName}<br/>
                 contact: {this.props._user1.email}</h2> : <h2>User:{this.props._user2.firstName} {this.props._user2.lastName}<br/>
                 contact: {this.props._user2.email}</h2> }   

                {this.props.isTrueString1 && <h2>{this.props._string1}</h2>}
                {this.props.isTrueString2 && <h2>{this.props._string2}</h2>}              
            </div>
        )
    }
}