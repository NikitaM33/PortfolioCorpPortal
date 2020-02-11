import React from 'react';
import style from './OldAnnounsItem.module.css';

const OldAnnounsItem = (props) => {

    let readAnnouns = () =>{
        alert('Старое объявление');
    }

    return (
        <div className={style.oldAnnounsmentsWrapper}>
            <div className={style.oldAnnounsmentsItem}>
                <div className={style.imgAnnouns}> 
                    <img src="" alt="Картинка" />
                </div>
                <div className={style.roundLeter}>
                    <h1>В</h1>
                </div>
                <div className={style.userItem}>
                    <h2>{props.headline}</h2>
                    <h4>{props.name}</h4>
                    <p>{props.content}</p>
                    <button onClick={readAnnouns}>Read more</button>
                </div>
            </div>
        </div>
    )
};

export default OldAnnounsItem;