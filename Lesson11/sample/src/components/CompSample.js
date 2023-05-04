import React, { Component } from 'react'

export class CompSample extends Component {


    render() {
        return (
            <div>
                {this.props.loading 
                ? 'loading...' 
                : this.props.posts.map((post)=> <div key={post.id}  >{post.title}</div>)}
            </div>
        )
    }
}

export default CompSample