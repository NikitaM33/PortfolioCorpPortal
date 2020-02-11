import React from 'react';
import style from './Carousel.module.css';
import Ivanov from '../../../img/IvanovStandTuned-min.png'

const Carousel = () => {
    return(
        <div className={style.carousel}>
            <div className={style.carouselWrapper}>
                <div className={style.carouselItem}><img src={Ivanov} alt="img" /></div>
            </div>
        </div>
    )
}

export default Carousel;