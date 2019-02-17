import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GETUSERS_QUERY } from './queries/queries';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      user: ''
    };
    this.onChange= this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      user: e.target.value
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <input type="text" onChange={this.onChange}/>
        <Query query={GETUSERS_QUERY} variables={{user}}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) {
              console.log(error);
              return <div>E</div>
            }
      
            const linksToRender = data.getUsers;
      
            return (
              <>
                {linksToRender.map(user =>
                  <div key={user.id}>
                    {user.userName}
                  </div>
                )}
              </>
            )
          }}
        </Query>
        </header>
      </div>
    );
  }
}

export default App;
