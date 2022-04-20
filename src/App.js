import './App.css';
import { Component } from 'react'
//import { Helmet } from 'react-helmet';
import Clock from './components/Clock'
import Customize from './components/Customize'
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "Guest",
      backgroundColor: "",
      textColor: ""
    };

  }

  updateProfile = (name, bColor, tColor) => {
    this.setState({
      username: name,
      backgroundColor: bColor,
      textColor: tColor 
    })

    

  }


  render() {

    let backgroundColor = this.state.backgroundColor
    
    document.body.style.backgroundColor = backgroundColor

    const {username} = this.state;
    const tColor = this.state.textColor;

    return (
      <div style={{color: tColor}}>
        <div>
          <h1>Hello, {username}!</h1>
          <Clock />
          <Customize username = {this.state.username} backgroundColor = {this.state.backgroundColor} textColor = {this.state.textColor} update={this.updateProfile} />
        </div>
        <Content/>

      </div>
      
    )
  }
}

export default App;
