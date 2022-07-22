import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { userId, title, body } = this.state
    const fields = [
      {
        name: 'userId',
        value: userId,
      },
      {
        name: 'title',
        value: title,
      },
      {
        name: 'body',
        value: body,
      },
    ]

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {
            fields.map((field, idx) => (
              <div key={idx}>
                <label>{field.name}: </label><br></br>
                <input
                  type="text"
                  name={field.name}
                  value={field.value}
                  onChange={this.changeHandler}
                />
              </div>
            ))
          }
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm