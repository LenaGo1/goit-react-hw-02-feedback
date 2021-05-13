import React from 'react';
import './Feedback.css';

const Feedback = ({onCountGood, onCountNeutral, onCountBad}) => (
    <div>
   <h1>Please leave feedback</h1>
                
                <button type="button" onClick={onCountGood}>Good</button>
                <button type = "button" onClick = {onCountNeutral}>Neutral</button>
                <button type = "button" onClick = {onCountBad}>Bad</button>
    </div>
)

export default Feedback;