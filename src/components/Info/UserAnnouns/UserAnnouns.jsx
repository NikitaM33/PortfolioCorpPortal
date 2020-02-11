import React from 'react';
import style from './UserAnnouns.module.css';
import FromNewAnnounsments from './FromNewAnnounsments/FromNewAnnounsments';

const UserAnnouns = (props) => {
    let userAnnounsElems = props.userUnnounsments.map( (newAnnouns) => <FromNewAnnounsments key={newAnnouns.id} name = {newAnnouns.name} headline = {newAnnouns.headline} content = {newAnnouns.content} /> );

    return (
        <div className={style.userAnnounsWrapper}>
            {userAnnounsElems}
        </div>
    )
}

export default UserAnnouns;