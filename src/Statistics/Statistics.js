import React, { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
    // state = {
    //     total: 0,
        
    // }
    
    
    
    render() {
        const { quantityGood, quantityNeutral, quantityBad, total, positivePersentage } = this.props;
        
        const countTotalFeedback = () => {
            total = quantityGood + quantityNeutral + quantityBad;
        };
        return (
    <div>
        <h2>Statistics</h2>
        <div>
            <p>Good: {quantityGood}</p>
            <p>Neutral: {quantityNeutral}</p>
            <p>Bad: {quantityBad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePersentage}</p>
        </div>
    </div>
        )}
}
// const Statistics = ({quantityGood, quantityNeutral, quantityBad, total, positivePersentage}) => (
//     <div>
//     <h2>Statistics</h2>
//                 <div>
//                     <p>Good: {quantityGood}</p>
//                     <p>Neutral: {quantityNeutral}</p>
//             <p>Bad: {quantityBad}</p>
//             <p>Total: {total}</p>
//             <p>Positive feedback: {positivePersentage}</p>
//         </div>
//         </div>
// )

export default Statistics;