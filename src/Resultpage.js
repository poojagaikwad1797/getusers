import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

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
                <div className="container" key={user.id}>
                  <div className="ec-card">
                  <div className="row">  
                  <div className="col-md-3 col-sm-4">
                  <img className="avtar" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}/>
                  </div>
                  <div className="col-md-9 col-sm-8">
                  <h2>{user.name}</h2>
                  <p><strong>Email:</strong>{user.email}</p>
                  <p><strong>Phone:</strong>{user.phone}</p>
                  <p><strong>Company:</strong>{user.company.name}</p>
                  <p><strong>Website:</strong>{user.website}</p>
                  <p><strong>Address:</strong>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</p>
                </div>
                </div>
                </div>
                </div>
              ))}
            </div>
          );
        }
      }
}
export default Resultpage;