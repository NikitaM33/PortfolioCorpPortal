import React from 'react';
import style from './FromNewAnnounsments.module.css';
import {NavLink} from 'react-router-dom';
import iceCream from '../../../../img/iceCream.jpg'

const FromNewAnnounsments = (props) => {

    let readAnnouns = () => {
        alert('Переход на страницу')
    }

    let firstLetter = (name) => {
        if(!name) return name;
        return name[0].toUpperCase();
    }

    let vocationHeadline = (headline) => {
        if(!headline) return headline;
        return headline.substring(0, 30);
    }

    let vocationName = (fName) => {
        if(!fName) return fName;
        return fName.substring(0, 38);
    }

    let vocationTextLength = (text) => {
        if(!text) return text;
        return text.substring(0, 140);
    }

    return (
        <div className={style.userAnnounsWrapper}>
            <div className={style.cardItem}>
                <div className="card">
                    <img src={iceCream} className="card-img-top" alt="..." />
                    
                    <div className="card-body">
                        <div className={style.userAnnounsItem}>
                            <div className={style.roundLeter}>
                                <h3>{firstLetter(props.name)}</h3>
                            </div>
                            <h4 className="card-title">{vocationHeadline(props.headline)}</h4>
                        </div>
                        <h5>{vocationName(props.name)}</h5>
                        <p className="card-text">{vocationTextLength(props.content)}</p>
                        <button onClick = {readAnnouns}>Посмотреть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromNewAnnounsments;