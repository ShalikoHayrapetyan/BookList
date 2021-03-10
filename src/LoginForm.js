import "./index.css";
import { Component } from "react";
import { connect } from "react-redux";
import BookList from "./BookList";



class LoginForm extends Component {
  state = {
    login: "",
    password: "" ,
    isUser: false
  }

  

  loginChange = (e) => {
    const { value } = e.target;
    this.setState({
      login: value,
    });
  }


  passwordChange = (e) => {
    const { value } = e.target;
    this.setState({
      password: value,
    });
  }

  chackIsUser = (e) => {
    const {users}=this.props
    e.preventDefault()
   // const { login, password,isUser } = this.state
   if(users.findIndex(el=>el.login==this.state.login && el.password==this.state.password)==-1){
    alert("Something wrong")
   }else {
        this.setState({
      isUser: true,
    })
   }
   
  }
  logOutUser =()=>{
    this.setState({
      isUser: false,
    })

  }


  render() {
    if(this.state.isUser){
      
      return(
        <BookList logOutUser={this.logOutUser} login={this.state.login}/>
      )
    }

    return (
      <div>
        <form className="form">
          <p className="login-title" >Welcome</p>
          <div>
            <input
              id='login1'
              className="inputs"
              type="text"
              placeholder="login"
              onChange={this.loginChange}>
            </input>
          </div>
          <div>
            <input
              className="inputs"
              type="password"
              placeholder="password"
              onChange={this.passwordChange}>

            </input>
          </div>
          <div>
            <button
              className="btn"
              onClick={this.chackIsUser}
            >Log in</button>
          </div>
        </form>
      </div>
    );
  }
}


export default LoginForm;