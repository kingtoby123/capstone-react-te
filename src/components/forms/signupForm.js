import React, { Component } from 'react';
import Basketballhoop from "../../../static/assets/images/logos/basketball-hoop.jpg"

import Cookies from 'js-cookie';


export default class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            passwordComfirm: "",
            name: "",
            error: "",
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
    
        if (this.state.username === "" || this.state.password === "" || this.state.passwordComfirm === "") {
          this.setState({ error: "Please fill out all fields" });
        } 
        else if (this.state.password !== this.state.passwordComfirm){
            this.setState({error: "passwords do not match"})
        }
        else {
          this.setState({
            loading: true,
            error: "",
          });
    
          fetch("https://capstone-basketball-api-te.herokuapp.com/user/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              name: this.state.name
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
    
              this.setState({ loading: false });

                this.props.handleSetUser(data);
                Cookies.set("username", this.state.username);
                this.props.changeRoute("/"); 
                
            })
            .catch((error) => {
              console.log("Error logging in", error);
              this.setState({
                loading: false,
                error: "An error occurred. Please try again later.",
              });
            });
        }
      }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>

            <div className="login-information-wrapper">
              <h3>BALLER LOGIN</h3>
              <p>
                Hello! Welcome to the KingOfHoops login page, put your information into the content below and lets get started on getting better today! Get your accsess to free basktball training drills
              </p>
            </div>
    
            <div className="login-input-wrapper">
    
    
              <div className="header-login">
                <h1>LOGIN TO ACCESS AWESOMENESS</h1>
    
              </div>
    
    
    
              <div className="image">
                <img src={Basketballhoop} alt="basketball hoop" />
              </div>
    
    
    
              <div className="login-form-wrapper">
    
                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
    
                  
                  <div className="form-group">
                    <input
                      type="username"
                      name="username"
                      placeholder="Your Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      />
                  </div>
    
    
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Your password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      />
                  </div>

                  <div className="form-group">
                      <input type="password" 
                        placeholder="Password Comfirm"
                        name="passwordComfirm"
                        value={this.state.passwordComfirm}
                        onChange={this.handleChange}
                        />
                  </div>

                  <div className="form-group">
                    <input type="text" 
                        placeholder="Full Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                  </div>


    
    
                  <button type="submit" disabled={this.state.loading}>Signup</button>
                  <p>{this.state.error}</p>
    
    
                </form>
              </div>
            </div>
    
          </div>
        )
    }
}