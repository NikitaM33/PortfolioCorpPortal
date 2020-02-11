import React from 'react';
import style from './NewAnnouns.module.css';
import AnnounsItem from './AnnounsItem/AnnounsItem';

const NewAnnouns = (props) => {

    let announsmentElement = props.newAnnounsment.map( (announs) => <AnnounsItem key={announs.id} name = {announs.name} headline = {announs.headline} content = {announs.content} />);

    return(
        <div className = {style.newAnnouns}> 
            {announsmentElement}
        </div>
    )
}

export default NewAnnouns;