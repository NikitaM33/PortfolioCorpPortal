import React from 'react';
import style from './Announsments.module.css';
import AnounsmentText from './AnounsmentText/AnounsmentText';
import AccardionContainer from './Accardion/AccardionContainer';

const Announsments = (props) => {
    return (
        <div className={style.announsmentsWrapper} id={"announsments"}>
            <AnounsmentText />
            <AccardionContainer />
        </div>
    )
}

export default Announsments;