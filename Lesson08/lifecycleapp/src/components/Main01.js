import React, { Component } from 'react'

export class Main01 extends Component {


  constructor(props) {
    super(props)

    this.state = {
      name: "Tommy from Main Component Main State",
      clickCount: 0,
      renderCount: 1
    }
    console.log("Main01Comp Constructer (1) Runned")
    // console.log("MainComp Props: ", props)
    // console.log('Main Component States: ', this.state)
  }

  //LIFECYCLE METHODS
  //ComponentDidMount created by "cdm" snippet

  componentDidMount() { console.log("Main01Comp ComponentDidMount (3) Runned") }

  //ComponentDidUpdate created by "cdup" snippet

  componentDidUpdate(prevProps, prevState) {
    console.log("Main01Comp ComponentDidUpdate (4) Runned")
    console.log("PREV STATE: ", prevState)
  }

  //ComponentWillUmnmount created by "cwun" snippet

  componentWillUnmount() { console.log("Main01Comp ComponentWillUnmount (5) Runned") }

  static getDerivedStateFromProps(props, state) {
    console.log("Main01Comp getDerivedStateFromProps (1.1) Runned")
    if (props.appNumber % 2 === 0) {
      // console.log("SUCCESS PROPS :", props.appNumber)
    }
    else {
      // console.log("FAİLED PROPS :", props.appNumber)
    }
    return null;
  }

  //ShouldComponentUpdate created by "scu" snippet

  shouldComponentUpdate(nextProps, nextState) {
    console.log("MainComp01 ShouldComponentUpdate (2.1) Runned")
    console.log("NEXT STATE : ", nextState)
    if (nextState.clickCount > 5) {
      return false;
    }
    return true;
  }

  //GetSnapshotBeforeUpdate created by "gsbu" snippet

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("MainComp01 GetSnapshotBeforeUpdate (3.1) Runned")
    return true; //continue to componentDidUpdate
    // return false; stop to componentDidUpdate
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   //Animation
  // }

  render() {

    console.log("Main01Comp Render (2) Runned", this.state.renderCount, "times")
    // console.log("(RENDER) MainComp Props: ", this.props)
    return (
      <div>Main01 Component
        <br />
        Number : {this.state.clickCount}
        <br />
        <button onClick={() => this.setState({ clickCount: this.state.clickCount + 1, renderCount: this.state.renderCount + 1 })}>Click Me</button>
      </div>
    )
  }
}

export default Main01