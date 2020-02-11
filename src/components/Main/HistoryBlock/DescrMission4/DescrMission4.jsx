import React from 'react';
import style from './DescrMission4.module.css';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescrMission2 = () => {

    let mission2 = () => {
        alert("Какой-то текст");
    };

    return(
        <div className={style.DescrMission2Wrapper}>
            <FontAwesomeIcon icon={faLock} className={style.iconStyle} />
            <h2>Надежность</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Accusamus exercitationem perferendis corrupti dicta culpa <br />officia distinctio quibusdam aspernatur! Recusandae, quod!</p>
        </div>
    )
}

export default DescrMission2;