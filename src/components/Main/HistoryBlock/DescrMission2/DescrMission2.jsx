import React from 'react';
import style from './DescrMission2.module.css';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescrMission2 = () => {

    let mission2 = () => {
        alert("Какой-то текст");
    };

    return(
        <div className={style.DescrMission2Wrapper}>
            <FontAwesomeIcon icon={faThumbsUp} className={style.iconStyle} />
            <h2>Эффективность</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Animi aperiam harum, quibusdam omnis nam expedita <br />molestias recusandae eos eius dignissimos.</p>
        </div>
    )
}

export default DescrMission2;