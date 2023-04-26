import React, { Component } from "react";

export class StyleSample extends Component {
  render() {
    const myPstyle = {
      color: "yellow",
      backgroundColor: "dodgerblue",
      padding: "13px",
      fontFamily: "Arial",
      fontWeight: "bold",
    };
    const myPstyle2 = {
      color: "red",
    };
    const myMerged = { ...myPstyle, ...myPstyle2 };
    return (
      <div>
        <h1 style={{ color: "red" }}>StyleSample Component</h1>
        <p style={myPstyle}>Description for App component</p>
        <p style={myMerged}>Second Description for App component</p>
      </div>
    );
  }
}

export default StyleSample;
