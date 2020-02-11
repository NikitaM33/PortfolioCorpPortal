import React from 'react';
import style from './DescrMission5.module.css';
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescrMission2 = () => {

    let mission2 = () => {
        alert("Какой-то текст");
    };

    return(
        <div className={style.DescrMission2Wrapper}>
            <FontAwesomeIcon icon={faCogs} className={style.iconStyle} />
            <h2>Развитие</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Dolores perspiciatis facere quae, quo vitae fugit <br />consequatur quia tempora ipsa laboriosam.</p>
        </div>
    )
}

export default DescrMission2;