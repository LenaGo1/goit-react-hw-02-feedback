import React, {Component} from 'react';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification'


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    countFeedback = (e) => {
        const selectedOption = e.currentTarget.textContent
        this.setState(prevState => ({
       [selectedOption]: prevState[selectedOption] + 1
      }))
     }
       
    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((acc, value)=> acc + value, 0)
        return total;
    };
        
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return  (total !== 0 ) ? Math.round((this.state.good / total) * 100) : 0
    };  
    

    render() {
        
        const { good, neutral, bad } = this.state;        
        const arrayFromState = Object.keys(this.state);
        const totalValues = this.countTotalFeedback();
                
        return (
            
            <Section title="Please leave feedback">
                <FeedbackOptions options={arrayFromState}
                    onLeaveFeedback={this.countFeedback} />
                {totalValues === 0
                    ? <Notification message="No feedback given"></Notification>
                    : <Statistics good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />}
            </Section>
        )
    }

}
export default App;
