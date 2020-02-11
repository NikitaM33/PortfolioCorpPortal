import React from 'react';
import style from './JobHeader.module.css';
import office from '../../../img/empresas.jpg';

const MainVacation = () => {
    return(
        <div className={style.wrapper}>
            <div className={style.jobHeader}>
                <h3>Страница портала</h3>
                <h1>Вакансии</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cum amet dignissimos nisi nam alias natus libero, perspiciatis quae est dolores tenetur? Animi, laboriosam illo? Expedita illo officia nobis totam.</p>
            </div>
            <div className={style.headerImg}>
                <img src={office} alt="headerImg"/>
            </div>
        </div>
    )
};

export default MainVacation;