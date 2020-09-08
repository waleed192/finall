import React from "react";
import axios from "axios";



class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        // renderNotes: false,
      };
    }
  
    submitLogin = (e) => {};
    changhandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = (e) => {
      axios
        .post("http://localhost:3001/login", this.state,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          const token = response.data.jwt;
          localStorage.setItem("token", token);
          console.log(token);
  
          this.props.history.replace("/NotesPage");
        })
  
        .catch((errors) => {
          localStorage.clear();
        });
    };
  
    render() {
      return (
        <div className="inner-container">
          <form onSubmit={this.handleSubmit}>
            <div className="header">Login</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                  onChange={this.changhandler}
                />
              </div>
  
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  onChange={this.changhandler}
                />
              </div>
  
              <button
                type="button"
                className="login-btn"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  export default LoginBox ;