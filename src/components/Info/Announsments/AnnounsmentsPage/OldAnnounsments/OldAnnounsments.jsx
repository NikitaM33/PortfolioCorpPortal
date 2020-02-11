import React from 'react';
import style from './OldAnnounsments.module.css';
import OldAnnounsItem from './OldAnnounsItem/OldAnnounsItem';

const OldAnnounsments = (props) => {

    let oldAnnounsmentElement = props.state.oldAnnounsment.map((oldAnnouns) => <OldAnnounsItem key={oldAnnouns.id} name = {oldAnnouns.name} headline = {oldAnnouns.headline} content = {oldAnnouns.content} />);

    return (
        <div className = {style.oldAnnounsments}> 
            {oldAnnounsmentElement}
        </div>
    )
};

export default OldAnnounsments;