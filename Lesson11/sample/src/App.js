import React, { Component } from 'react'
import CompSample from './components/CompSample'
import axios from 'axios'

export class App extends Component {
  state = { posts: {}, loading: true }

  componentDidMount() {
      this.fetchData()
  }
  fetchData = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
              this.setState({ posts: response.data, loading: false })
          })
          .catch((error) => {
              console.log(error)
          })
  }
  render() {
    return (
      <div>App
        {/* <CompSample {... this.state}></CompSample> */}
        {this.state.loading ? 'Loading...' : this.state.posts.map((post)=> <div key={post.id}>{post.title}</div>
        )}
      </div>
    )
  }
}

export default App