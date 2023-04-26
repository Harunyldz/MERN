import React, { Component } from "react";
import PropTypes from "prop-types"; //proptypes ları kullanmak için eklendi

export default class BlogTest extends Component {
  static propTypes = {
    blogtitle: PropTypes.string.isRequired, // blogtitle in string olma zorunluluğunu sağladı, isrequired ise blogtitle a değer verme zorunluluğu sağladı
    age:PropTypes.number, // age in number olma zorunluluğunu sağladı
    blogArray:PropTypes.array.isRequired,
    blogObject:PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired
    }).isRequired
  };
  render() {
    console.log("BlogTest Props: ",this.props);
    return (
      <div>
        <p>BlogTest Component is here</p> <br />
        <p>Blog Title: {this.props.blogtitle}</p> <hr />
        Blog Age: {this.props.age} <hr />
        Blog Name: {this.props.name}<hr />
        Blog Array: {this.props.blogArray}<hr />
        Blog Object: {this.props.blogObject.id}, {this.props.blogObject.title}
      </div>
    );
  }
}
