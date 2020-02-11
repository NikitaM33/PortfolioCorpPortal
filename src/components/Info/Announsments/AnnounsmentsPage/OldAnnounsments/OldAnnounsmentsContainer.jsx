import React from 'react';
import style from './OldAnnounsments.module.css';
import OldAnnounsments from './OldAnnounsments';
import {connect} from 'react-redux';

// const OldAnnounsments = (props) => {

//     let oldAnnounsmentElement = props.state.AnnounsmentsPage.oldAnnounsment.map((oldAnnouns) => <OldAnnounsItem name = {oldAnnouns.name} headline = {oldAnnouns.headline} content = {oldAnnouns.content} />);

//     return (
//         <div className = {style.oldAnnounsments}> 
//             {oldAnnounsmentElement}
//         </div>
//     )
// };

let mapStateToProps = (state) => {
    return{
        state: state.AnnounsmentsPage
    }
}

const OldAnnounsmentsContainer = connect(mapStateToProps)(OldAnnounsments);

export default OldAnnounsmentsContainer;