import React from 'react';
import PropTypes from "prop-types";
import './Section.css'

const Section = ({title, children}) => 
    <div className="Section" >
        <h1>{title}</h1>
        {children}
    </div>;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}



export default Section;