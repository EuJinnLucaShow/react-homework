// Відокремлюйте іменовані імпорти, це підвищує читабельність коду
import React, { Component } from "react";
import Statistics from './Statistics/Statistics'
import { Button } from './Counter.styled'


class Counter extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  handleClick = (type) => { 
    this.setState(prevState => ({        
      [type]: prevState[type] + 1
    })); 
    
    //або без return >>

    // this.setState((prevState) => {
    //   return {
    //     good:prevState.good + 1,        
    //   }      
    // })    
  }

  countTotalFeedback = () => {    
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
   }

  render() {    
      return <div>
          <h1>Please leave feedback</h1>
        <Button type="button" onClick={()=>this.handleClick('good')}>Good</Button>
        <Button type="button" onClick={()=>this.handleClick('neutral')}>Neutral</Button>
        <Button type="button" onClick={()=>this.handleClick('bad')}>Bad</Button>        
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
    </div>;
  }
}

export default Counter