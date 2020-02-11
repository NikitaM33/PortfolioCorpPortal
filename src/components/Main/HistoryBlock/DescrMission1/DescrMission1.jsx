import React from 'react';
import style from './DescrMission1.module.css';
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescrMission1 = () => {

    let mission1 = () => {
        alert("Какой-то текст");
    };

    return(
        <div className={style.DescrMission1Wrapper}>
            <FontAwesomeIcon icon={faHandshake} className={style.iconStyle} />
            <h2>Профессионализм</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Commodi quia perferendis a totam, sunt labore omnis <br />architecto illo unde neque!</p>
        </div>
    )
}

export default DescrMission1;