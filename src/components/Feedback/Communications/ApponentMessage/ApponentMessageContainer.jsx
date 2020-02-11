import React from 'react';
import style from './ApponentMessage.module.css';
import ApponentNameElement from './ApponentNameElement/ApponentNameElement';
import ApponentMessage from './ApponentMessage';
import {connect} from 'react-redux';

// const ApponentMessageContainer = (props) => {
//     // debugger;
//     let aponMessage = props.store.getState().feedbackPage.apponentPosts.map( (aponPost) => <ApponentNameElement name = {aponPost.name} message = {aponPost.message} /> );

//     return (
//         <div className = {style.messageBlock}>
//             <div className = {style.imgElement}>
//                 <img src="https://avatarfiles.alphacoders.com/798/79894.jpg" alt="Foto"/>
//             </div>
//             <div>{ aponMessage }</div>
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    return{
        state: state.feedbackPage
    }
}

const ApponentMessageContainer = connect(mapStateToProps)(ApponentMessage);

export default ApponentMessageContainer;