import React from "react";
import axios from "axios";
import Setprofile from "./setprofile";
import "./setprofile.css";



class RegisterBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        id: "",
        profileImg:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        imagedata : ""
      };
    }
  
    submitRegister(e) {}
    changhandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };


    setImage = (e) => {

      this.setState({imagedata:e.target.files[0]})
     
    }
    imageHandler = () => {
      let formData = new FormData();
  
      formData.append("file",this.state.imagedata);
      axios({
        method: "post",
        url: "http://localhost:3001/setprofile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
  
           this.setState({profileImg: res.data.url});
          
          console.log(res);
         
  
      })
      
  
    };
    submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
      console.log("localStorage.getItem(token)", localStorage.getItem("token"));
   this.imageHandler();
      axios
      .post("http://localhost:3001/regs", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password, 

        
        
      }).then((response) => {
          console.log(response);
          let {data} = response
          localStorage.setItem('token', data.jwt)
      
          // const token = response.jwt;
          // localStorage.setItem("token", token);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    render() {
      return (

        <div>
        
     

        <form onSubmit={this.submitHandler}>
          <div className="inner-container">
            <div className="header">Register</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                  onChange={this.changhandler}
                  value={this.username}
                />
              </div>
  
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="login-input"
                  placeholder="Email"
                  onChange={this.changhandler}
                />
              </div>
  
              <div className="input-group">
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  onChange={this.changhandler}
                />
              </div>
              <Setprofile profileImg = {this.state.profileImg} setImage = {this.setImage}  />
              
              <button
                type="button"
                className="login-btn"
                onClick={this.submitHandler}
              >

                Register
              </button>
            </div>
          </div>
        </form>
  

        </div>
       
      );
    }
  }

  export default RegisterBox ;