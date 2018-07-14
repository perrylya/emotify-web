import React from 'react';
import PhotoPage from './photopage';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  handleClick() {
    if(this.state.username === 'fkigawa' && this.state.password === 'emotify') {
      this.setState({loggedIn: !this.state.loggedIn})
    } else {
      alert('Incorrect Login Info')
    }
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="maincontent">
        {this.state.loggedIn ?
          <div className="emotify">

              <PhotoPage />

          </div>
          :
          <div className="emotify">
            <div>
                <h1>EMOTIFY</h1>
                <h3>Sign in with your Spotify account!</h3>
                <form className="login">
                  <input placeholder="USERNAME" onChange={this.handleUsernameChange.bind(this)} value={this.state.username}></input>
                  <input type="password" placeholder="PASSWORD" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} ></input>
                  <button onClick={this.handleClick.bind(this)}>LOGIN</button>
                </form>
            </div>
          </div>
        }
      </div>
    );
  }
}




export default App;
