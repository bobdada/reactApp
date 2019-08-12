import React from 'react';
import './App.css';
import Counter from './Components/Counter'
import Routine from './Components/Routine'

class App extends React.Component {
  state = {
    display: null
  }

  displayCounter = () => {
    this.setState({
      display: 'counter'
    })
  }

  displayRoutine = () => {
    this.setState({
      display: 'routine'
    })

  }

  render() {

    return (
      <div className="container1">
        <p>Welcome to the App</p>
        <button onClick={this.displayCounter}>Counter</button >
        <button onClick={this.displayRoutine}>Routine</button>
        {this.state.display === 'counter' ? <Counter /> : null}
        {this.state.display === 'routine' ? <Routine /> : null}
      </div >
    )
  }

}

export default App;
