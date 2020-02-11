import React from 'react';
import style from './ApponentMessage.module.css';
import ApponentNameElement from './ApponentNameElement/ApponentNameElement';

const ApponentMessage = (props) => {
    // debugger;
    let aponMessage = props.state.apponentPosts.map( (aponPost) => <ApponentNameElement key={aponPost.id} name = {aponPost.name} message = {aponPost.message} /> );

    return (
        <div className = {style.messageBlock}>
            <div className = {style.imgElement}>
                <img src="https://avatarfiles.alphacoders.com/798/79894.jpg" alt="Foto"/>
            </div>
            <div>{ aponMessage }</div>
        </div>
    )
}

export default ApponentMessage;