import React from 'react';
import style from './PostText.module.css';

const PostText = (props) => {
    return (
        <div className = {style.PostTextWrapper}>
            <div className={style.point}>{props.number}</div>
            <div className={style.historyText}>
                <h3>{props.date}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default PostText;