import React from 'react';
import style from './FirstPost.module.css';
import FirstPostText from './FirstPostText/FirstPostText';

const FirstPost = (props) => {
    const historyData = props.state.historyOne.map((hist) => <FirstPostText key={hist.id} number={hist.number} date={hist.date} text={hist.text} />)

    return (
        <div className = {style.firstPostWrapper}>
           {historyData}
        </div>
    )
}

export default FirstPost;