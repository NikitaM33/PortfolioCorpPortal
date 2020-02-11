import React from 'react';
import style from './WelcomeBtn.module.css';
// import {NavLink} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

const WelcomeBtn = () => {
    return(
        <div className={style.welcomeBtn}>
            <div className={style.btn}>
                <NavLink smooth to='/main/#map'>Карта офиса</NavLink>
            </div> 
            <div className={style.btn}>
                <NavLink smooth to='/information/#news'>Новости</NavLink>
            </div>
        </div>
    )
}

export default WelcomeBtn;