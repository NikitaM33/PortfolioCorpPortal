// import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../../redux/feedBackReducer';
import MessageArea from './MessageArea';
import {connect} from 'react-redux';


// const MessageAreaContainer = (props) => {
//     let state = props.store.getState();

//     let addPost = () => {
//         props.store.dispatch( addPostActionCreater() );
//     };

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreater(text)
//         props.store.dispatch(action);
//     };

//     return (<MessageArea updateNewPostText={onPostChange} addPost={addPost} state={props.state} state={state.feedbackPage} />);
// };
// debugger;
let mapStateToProps = (state) => {
    return{
        state: state.feedbackPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextActionCreater(text));
        },

        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}

const MessageAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessageArea);

export default MessageAreaContainer;