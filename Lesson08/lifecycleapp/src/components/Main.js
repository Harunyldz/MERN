import React, { Component } from 'react'

export class Main extends Component {
    
constructor(props){
    super(props)
    console.log("Main Component Constructer Runned")
    console.log("Main Component Props: ",props)
    this.state={
        name:"Tommy from Main Component Main State"
    }
    console.log('Main Component States: ',this.state)
}

  render() {
    return (
      <div>Main Component
        <br/>
        {this.state.name}
      </div>
    )
  }
}

export default Main