import React from "react";
import "./App.scss";
import LoginBox from "./Component/LoginBox";
import RegisterBox from "./Component/RegisterBox";
import NotesPage from "./Component/NotesPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter {...this.props}>
        <Switch>
          <Route path="/" exact={true} component={LOGR} />
          <Route path="/NotesPage" exact={true} component={NotesPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
class LOGR extends React.Component {
  state = {
    isLoginOpen: false,
  };

  showLoginBox = () => {
    this.setState({ isLoginOpen: true });
  };

  showRegisterBox = () => {
    this.setState({ isLoginOpen: false });
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox}
          >
            Register
          </div>
        </div>
        <div className="box-container">
          {this.state.isLoginOpen ? (
            <LoginBox {...this.props} />
          ) : (
            <RegisterBox />
          )}
        </div>
      </div>
    );
  }
}
