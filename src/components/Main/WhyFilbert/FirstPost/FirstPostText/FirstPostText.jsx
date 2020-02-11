import React from 'react';
import style from './FirstPostText.module.css';

const FirstPostText = (props) => {
    return (
        <div className = {style.FirstPostTextWrapper}>
            <div className={style.point}>{props.number}</div>
            <div className={style.historyText}>
                <h3>{props.date}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default FirstPostText;