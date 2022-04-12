import './App.css';
import { Component } from 'react'
import Clock from './components/Clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "Guest" };
  }




  render() {
    return (
      <div>
        <h1>Hello, {this.state.username}!</h1>
        <Clock />
      </div>
      
    )
  }
}

export default App;
