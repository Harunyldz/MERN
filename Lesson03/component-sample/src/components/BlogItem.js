import React, { Component } from "react";

export default class BlogItem extends Component {
  render() {
    console.log("all props: ",this.props);  //BlogItem üzerindeki tüm propsları gösterdi
    return (
      <div className="itemDiv">
        <h2> {this.props.title} </h2>
        <p>{this.props.description}</p>
        </div>
    );
  }
}
