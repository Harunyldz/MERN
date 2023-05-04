import React, { Component } from 'react'
import LoaderHOC from './LoaderHOC'

class User extends Component {
    render() {
        const userList={
            border:'1px solid black'
        }
        const rowStyle={
            fontSize:'20px',
            color:'gray',
            borderBottom:'1px solid gray'
        }
        console.log(this.props)
        return (
            // this.props.loading===true ? 'Loading...' : bu kısmı Hoc ile yaptık
            <div style={userList}><h2>User List</h2>
                {this.props.users.length>0 && this.props.users.map((user, index)=>
                 <div style={rowStyle} key={user.id}>{index+1}.{user.name}</div>)}
            </div>
        )
    }
}

// hem users dan hem de osts dan HOC a verigönderdiğimiz için (User,"users") ekledik
export default LoaderHOC(User,"users") 