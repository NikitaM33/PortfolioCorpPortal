import React from 'react';
import style from './NameElement.module.css';

const NameElement = (props) => {

    return (
        <div className = {style.nameElement}>
            <h3>{ props.name }</h3>
            <div className = {style.textMessage}>
                <p>{ props.message }</p>
            </div>
        </div>
    )
}

export default NameElement;