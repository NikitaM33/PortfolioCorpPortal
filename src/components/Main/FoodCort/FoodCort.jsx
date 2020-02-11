import React from 'react';
import style from './FoodCort.module.css';
import Bazar from './Bazar/Bazar';
import Moroshka from './Moroshka/Moroshka';

const FoodCort = () => {
    return (
        <div className={style.foodCort}>
            <div className={style.bazarWrapper}>
                <Bazar /> 
            </div>
            <div className={style.moroshkaWrapper}>
                <Moroshka />
            </div>
        </div>
    )
}

export default FoodCort;