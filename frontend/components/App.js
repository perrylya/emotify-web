import React from 'react';
import PhotoPage from './photopage';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getURL(){
    var url = window.location.href;
    console.log(url);
  }



  handleClick() {
    if(this.state.username === 'fkigawa' && this.state.password === 'emotify') {
      this.setState({loggedIn: !this.state.loggedIn})
      window.location.assign('http://localhost:8888')
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

  componentDidMount(){
    this.getURL();
    let params = this.getHashParams();
    console.log(params);
    let state = this.state.loggedIn;
    if(params.access_token){
      this.setState({
        loggedIn: !state
      })
    }
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
                <h3>Sign in with your Spotify account</h3>
                <form className="login">
                  <input placeholder="USERNAME" onChange={this.handleUsernameChange.bind(this)} value={this.state.username}></input>
                  <input type="password" placeholder="PASSWORD" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} ></input>
                  <button onClick = {this.handleClick.bind(this)}>LOGIN</button>
                </form>
            </div>
          </div>
        }
      </div>
    );
  }
}




export default App;
