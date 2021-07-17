import React, { Component } from 'react';

class Resultpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          loading: false,
        };
      }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(result => {
            this.setState({
              loading: true,
              users: result
            });
          });
      }
      render() {
        const { users } = this.state;
        const { loading } = this.state;
        if (!loading) {
          return <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>;
        } else {
          return (
            <div>
              {users.map(user => (
                <p key={user.id}>
                  <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}/>
                  <h1>{user.name}</h1>
                  <h2>Email:{user.email}</h2>
                  <h2>Phone:{user.phone}</h2>
                  <h2>Company:{user.company.name}</h2>
                  <h2>Website:{user.website}</h2>
                  <h2>Address:{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</h2>
                </p>
              ))}
            </div>
          );
        }
      }
}
export default Resultpage;