import React from 'react';
import style from './InfoHeader.module.css';
import grafic from '../../../img/grafic.jpg';

const InfoHeader = () => {
    return(
        <div className={style.infoHeader}>
            <div className={style.headerText}>
                <h3>Информационный центр</h3>
                <h1>Будь в центре внимания</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quidem ipsum expedita modi porro vitae debitis dicta <br />cupiditate illo optio quis.</p>
            </div>
            <div className={style.grafic}>
                <img src={grafic} alt="Какая-то картинка с графиком"/>
            </div>
        </div>
    )
}

export default InfoHeader;