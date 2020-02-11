import React from 'react';
import style from './DescrMission3.module.css';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescrMission2 = () => {

    let mission2 = () => {
        alert("Какой-то текст");
    };

    return(
        <div className={style.DescrMission2Wrapper}>
            <FontAwesomeIcon icon={faBalanceScale} className={style.iconStyle} />
            <h2>Справедливость</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Doloremque eum quod consequuntur illo nam dolorem. <br />Aperiam harum culpa repellat quia!</p>
        </div>
    )
}

export default DescrMission2;