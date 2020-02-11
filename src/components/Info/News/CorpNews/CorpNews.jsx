import React from 'react';
import style from './CorpNews.module.css';
import LocalNewsBoxContainer from './LocalNewsBox/LocalNewsBoxContainer';
import Pages from './Pages/Pages';

const CorpNews = (props) => {

    return (
        <div className={style.corpNewsWrapper}>
            <div className={style.corpHead}>
                <h2>Here will be the local news</h2>
                <h1>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Doloribus, repudiandae.</h1>
            </div>
            <div className={style.myClass}>
                <LocalNewsBoxContainer />
            </div>
            <Pages />
        </div>
    )
}

export default CorpNews;