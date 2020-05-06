import React from 'react';
import {User} from './User';
import {Kniga} from './Kniga'

export class App extends React.Component{

  render(){

    var user1 = {
      firstName : "Dedo",
      lastName:"Mraz",
      email : "dedo@mraz"
    }

    var user2 = {
      firstName : "Ronaldo",
      lastName:"Ronaldoski",
      email : "ronaldo@footbal"
    }
    
    var knigi = ['Kasni Porasni','Zoki Poki','Trajche Drvarcheto'];

    return(
      <div id='App'>
        <h2>App</h2>
        <User _user1={user1} _user2={user2} isTrue={false} _string1={"user1"} _string2={"user2"} isTrueString1={false} isTrueString2={true}/>

        <Kniga knigi={knigi}/>
      </div>
    )
  }
}