import './App.css';
import { Component } from 'react'
//import Clock from './components/Clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "Guest" };
  }


  

  render() {
    return (
      <h1>Hello, {this.state.username}!</h1>

    )
  }
}

export default App;
