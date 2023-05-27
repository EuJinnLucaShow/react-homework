// Відокремлюйте іменовані імпорти, це підвищує читабельність коду
import React, { Component } from "react";
import { Button } from './Counter.styled'

class Counter extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  handleClick = (type) => { 
    this.setState(prevState => ({ 
       ...prevState,
      [type]: prevState[type] + 1
    }));        
    //або без return >>
    // this.setState((prevState) => {
    //   return {
    //     good:prevState.good + 1,        
    //   }      
    // })    
  }

  render() {    
      return <div>
          <h1>Please leave feedback</h1>
          <Button type="button" onClick={() => this.handleClick('good')}>Good</Button>
          <Button type="button" onClick={() => this.handleClick('neutral')}>Neutral</Button>
          <Button type="button" onClick={() => this.handleClick('bad')}>Bad</Button>
          <h2>Statistics</h2>
          <p>Good: { this.state.good }</p>
          <p>Neutral: { this.state.neutral }</p>
          <p>Bad: { this.state.bad }</p>
    </div>;
  }
}

export default Counter