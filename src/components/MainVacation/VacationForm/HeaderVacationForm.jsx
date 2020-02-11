import React from 'react';
import style from './VacationForm.module.css';
import handshake from '../../../img/handshake.jpg'

const HeaderVacationForm = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.headlineContainer}>
                <h4>Форма заявки</h4>
                <h2>Здесь вы можете оставить заявку на открытую вакансию</h2>
            </div>
            <div className={style.imageWrapper}>
                <img src={handshake} alt="картиночка"/>
            </div>
        </div>
    )
}

export default HeaderVacationForm;