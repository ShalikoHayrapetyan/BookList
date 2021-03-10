
import './App.css';
import LoginForm from './LoginForm';
import { connect } from "react-redux";
import React from "react"

import "./index.css";

class App extends React.Component {
  render(){
      return  (
    <div className="body">
        <LoginForm users={this.props.users}/> 
    </div>
  );
 
}
  }

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default  connect(mapStateToProps)(App); 
