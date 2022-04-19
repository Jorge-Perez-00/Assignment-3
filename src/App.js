import './App.css';
import { Component } from 'react'
//import { Helmet } from 'react-helmet';
import Clock from './components/Clock'
import Customize from './components/Customize'

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
        <h1>Hello, {username}!</h1>

        <Clock />
        <Customize update={this.updateProfile} />

      </div>
      
    )
  }
}

export default App;
