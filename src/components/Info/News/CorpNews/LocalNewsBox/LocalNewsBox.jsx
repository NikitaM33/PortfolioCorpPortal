import React from 'react';
import style from './LocalNewsBox.module.css';
import LocalNews from './LocalNews/LocalNews';

const LocalNewsBox = (props) => {

    let localNews = props.state.corpNews.map( (cn) =>  <LocalNews key={cn.id} headline = {cn.headline} article = {cn.article} />);

    return (
        <div className={style.localNewsBoxWrapper}>
           {localNews}
        </div>
    )
}

export default LocalNewsBox;