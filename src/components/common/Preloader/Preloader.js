import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import style from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className = {style.wrapper}>
            <img src = { preloader } />
        </div>
    )
}

export default Preloader;