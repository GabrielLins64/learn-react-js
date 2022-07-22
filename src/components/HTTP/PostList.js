import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: 'Error retrieving data'
        })
      })
  }

  render() {
    const { posts, errorMessage } = this.state

    return (
      <div>
        <h2>
          List of Posts
        </h2>
        {
          posts.length ?
            posts.map(post => (
              <div key={post.id}>{post.title}</div>
            )) :
            null
        }
        { errorMessage ? <div>{errorMessage}</div> : null }
      </div>
    )
  }
}

export default PostList