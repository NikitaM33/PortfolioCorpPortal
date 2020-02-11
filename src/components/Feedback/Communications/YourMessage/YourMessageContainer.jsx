import React from 'react';
import style from './YourMessage.module.css';
import NameElement from './NameElement/NameElement';
import YourMessage from './YourMessage';
// import {connect} from 'react-redux';

// const YourMessageContainer = (props) => {
    // debugger;
    // let myMessage = props.store.getState().feedbackPage.myPosts.map( (myP) => <NameElement name = {myP.name} message = {myP.message} /> );

    // return (
    //     <div className = {style.messageBlock}>
    //         <div className = {style.imgElement}>
    //             <img src="https://i.pinimg.com/originals/31/46/2d/31462dd2dace33ac03e1e2dfc0257784.jpg" alt="Foto"/>
    //         </div>
    //         <div>{ myMessage }</div>
    //     </div>
    // )
// }

// let mapStateToProps = (state) => {
//     return{
//         state: state.feedbackPage
//     }
// }

// const YourMessageContainer = connect(mapStateToProps)(YourMessage);

// export default YourMessageContainer;

// const YourMessage = (props) => {
//     // debugger;
//     let myMessage = props.state.myPosts.map( (myP) => <NameElement key={myP.id} name = {myP.name} message = {myP.message} /> );

//     return (
//         <div className = {style.messageBlock}>
//             <div className = {style.imgElement}>
//                 <img src="https://i.pinimg.com/originals/31/46/2d/31462dd2dace33ac03e1e2dfc0257784.jpg" alt="Foto"/>
//             </div>
//             <div>{ myMessage }</div>
//         </div>
//     )
// }

// export default YourMessage;