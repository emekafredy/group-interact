import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  constructor() {
    super();
  
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/users').then(res => {
      res.json().then(users => {
        return this.setState({ users: users.users })
      })
    })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2> Users </h2>
        <ul>
          {
            users ? users.map(user => {
              return <li key={user.id}> { user.name } </li>
            }) : ''
          }
          <li>hello</li>
        </ul>
      </div>
    )
  }
}

export default Users;
