import React from 'react';
import style from './Communications.module.css';
import MessageAreaContainer from './MessageArea/MessageAreaContainer';
import YourMessageContainer from './YourMessage/YourMessageContainer';
import ApponentMessageContainer from './ApponentMessage/ApponentMessageContainer';


const Communications = (props) => {
    // debugger;
    return (
        <div className = {style.feedbackWrapper}>
            <div className = {style.feedbackMess}>
                <YourMessageContainer store={props.store} />
                <ApponentMessageContainer store={props.store} />
            </div>
            <div>
                <MessageAreaContainer store={props.store} />
            </div>
        </div>
    )
}

export default Communications;