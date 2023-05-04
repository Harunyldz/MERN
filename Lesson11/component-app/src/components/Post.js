import React, { Component } from 'react'
import LoaderHOC from './LoaderHOC'

class Post extends Component {
    render() {
        const rowStyle={
            fontSize:'20px',
            color:'gray',
            borderBottom:'1px solid gray'
        }
        console.log(this.props)
        return (
            // this.props.loading===true ? 'Loading...' : bu kısmı Hoc ile yaptık
            <div><h2>Post List</h2>
                {this.props.posts.length>0 && this.props.posts.map((post, index)=>
                 <div style={rowStyle} key={post.id}>{index+1}.{post.title}</div>)}
            </div>
        )
    }
}

// hem users dan hem de osts dan HOC a verigönderdiğimiz için (Post,"posts") ekledik
export default LoaderHOC(Post,"posts") 