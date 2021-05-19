import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map(option => {
            return (
                <button key={option}
                    type="button"
                    className = "Button"
                    onClick={onLeaveFeedback}>
                    {option}
                </button>
            )
        })
    }       
    </div>
)
 
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired

}

export default FeedbackOptions;