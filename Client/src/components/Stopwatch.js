import React, { Component } from 'react';
import '../css/App.css';


//Stopwatch Component
class Stopwatch extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

//Timer Component where state is tracked and clicks are handled


class Timer extends Component {
  state = {
    status: false,
    runningTime: 0
  };
  
//Handle click to start or stop button
  handleToggle = () => {
    console.log("clicked")

    this.setState(state => {
      
      if (state.status) {
        clearInterval(this.timer);
      } 
      
      else {
        const startTime = Date.now() - this.state.runningTime;


        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };

//Handle click to reset button
  handleReset = () => {
    if(!this.state.status){
      this.setState({ runningTime: 0, status: false });
      } 
    };


//Render HTML for the timer component
  render() {
    const { status, runningTime } = this.state;
    
    return (
      <div className="stopwatch">
        <h3 className="runningTime">{runningTime}seconds</h3>
        
        <div className="buttons">
          <button onClick={this.handleToggle}>{status ? 'Stop' : 'Start'}</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  } 
}

export default Stopwatch;