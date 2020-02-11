import React from 'react';
import style from './CorpLiveHeader.module.css';
import Carousel from '../Carousel/Carousel';

const CorpLiveHeader = (props) => {
    return (
        <div className={style.infoHeader}>
            <div>
                <h4>Корпоративная жизнь</h4>
                <h1>Внутренняя жизнь</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis <br />commodi, cupiditate non voluptatum amet aspernatur culpa odio beatae assumenda?
                </p>
            </div>
            <div className={style.grafic}>
                <Carousel props={props} />
            </div>
        </div>
    )
}

export default CorpLiveHeader;