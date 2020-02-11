import React from 'react';
import style from './newWorkerSlide.module.css';

const NewWorkerItem = (props) => {
    return (
        <div className={style.slide}>
            <div>
                <img src={props.img} alt="Worker Img" />
            </div>

            <div>
                <h5>{props.firstName + ' ' + props.lastName}</h5>
                <p>{props.introdusing}</p>
            </div>
        </div>
    )
}

export default NewWorkerItem;