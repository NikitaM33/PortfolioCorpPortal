import React from 'react';
import style from './ApponentNameElement.module.css';

const ApponentNameElement = (props) => {

    return (
        <div className = {style.nameElement}>
            <h3>{ props.name }</h3>
            <div className = {style.textMessage}>
                <p>{ props.message }</p>
            </div>
        </div>
    )
}

export default ApponentNameElement;