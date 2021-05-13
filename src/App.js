import React, {Component} from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics'


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1            
        }))
    }

    countNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1 
        }))
    }

    countBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }
    
    // countTotalFeedback = () => {
    //         total = quantityGood + quantityNeutral + quantityBad;
    //     };

    render() {
        
        const quantityGood = this.state.good;
        const quantityNeutral = this.state.neutral;
        const quantityBad = this.state.bad;
        // let total;
        // let positivePersentage;
        
        // const countTotalFeedback = () => {
        //     total = quantityGood + quantityNeutral + quantityBad;
        // };
        // countTotalFeedback();
        
        // countPositiveFeedbackPercentage();
        
        return (
            <>
                <Feedback onCountGood={this.countGood} onCountNeutral={this.countNeutral} onCountBad = {this.countBad}/>
            {/* <h1>Please leave feedback</h1>
                
                <button type="button" onClick={this.countGood}>Good</button>
                <button type = "button" onClick = {this.countNeutral}>Neutral</button>
                <button type = "button" onClick = {this.countBad}>Bad</button>
                     */}
                <Statistics quantityGood={quantityGood} quantityNeutral={quantityNeutral} quantityBad={quantityBad}/>
            {/* <h2>Statistics</h2>
                <div>
                    <p>Good: {quantityGood}</p>
                    <p>Neutral: {quantityNeutral}</p>
                    <p>Bad: {quantityBad}</p>
                </div> */}
        </>
        )
    }

}
export default App;
