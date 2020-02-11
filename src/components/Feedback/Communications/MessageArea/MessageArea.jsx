import React from 'react';
import style from './MessageArea.module.css';


const MessageArea = (props) => {

    let newPostMessage = React.createRef();

    let onAddPost = () => {
        let text = newPostMessage.current.value;

        if(!text) {
            alert("Введите сообщение");
        } else {
            props.addPost();
            // text = '';
            // props.updateNewPostText();
        };
    };

    let onPostChange = () => {
        let text = newPostMessage.current.value;
        props.updateNewPostText(text);
    };

    return ( 
        <div className = {style.textElement}>
            <textarea onChange = { onPostChange } ref = { newPostMessage } 
                value = {props.state.newPostText} />

            <button onClick = { onAddPost }>Отправить</button>
        </div>
    );
};

export default MessageArea;