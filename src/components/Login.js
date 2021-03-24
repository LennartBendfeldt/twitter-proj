import React from 'react';

class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = { username: '', password: '' };
    }
    // function validateForm() {
    //     return username.length > 0 && password.length > 0;
    //   }
    handleChange = ({ target }) => {
       this.setState({ [target.name]: target.value });
    };
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </form>
          <form action="/feed">
          <button 
          type="submit" >
            Login
          </button>
          </form>
        </React.Fragment>
      );
    }
   }
   export default Login;