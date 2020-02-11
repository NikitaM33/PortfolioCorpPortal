import React from 'react';
import style from './SecondPost.module.css';
import PostText from './PostText/PostText';

const SecondPost = (props) => {
    let secondPostData = props.state.historyTwo.map((hist) => <PostText key={hist.id} number={hist.number} date={hist.date} text={hist.text}/>);

    return (
        <div className = {style.secondPostWrapper}>
            {secondPostData}
        </div>
    )
}

export default SecondPost;