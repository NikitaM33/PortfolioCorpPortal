import React from 'react';
import style from './LocalNews.module.css';
import {NavLink} from 'react-router-dom';

const LocalNews = (props) => {

    let truncate = (text) => {
        let maxLength = 220;
        return (text.length > maxLength) ? text.slice(0, maxLength - 3) + '...' : text;
    }

    return (
        <div className={style.localNews}>
            <div className={style.bigImg}>
                <img src="" alt="firstPicture" />
            </div>

            <div className={style.news}>
                <NavLink to="/blockItem">
                    <h3>{props.headline}</h3>
                    <p>{truncate(props.article)}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default LocalNews;