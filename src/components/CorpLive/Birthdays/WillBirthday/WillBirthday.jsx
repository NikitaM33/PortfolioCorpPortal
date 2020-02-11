import React from 'react';
import style from './WillBirthday.module.css';
import PhotoBox from './PhotoBox/PhotoBox';
import AddNewWorkerBD from './AddNewWorkerBD/AddNewWorkerBD';

const WillBirthday = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div>
                    <h3>В этом месяце</h3>
                    <h1>Празднуют День рождения</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, reprehenderit culpa laboriosam possimus magni cupiditate dicta soluta eos odio vitae:</p>
                </div>
                <div className={style.selebration}>
                    <div className={style.starContainer}>
                        <div className={style.starsShine}></div>
                    </div>
                </div>
            </div>
            <AddNewWorkerBD {...props} />
            <PhotoBox birthdayPhotosList={props.birthdayPhotosList} findEddingPerson={props.findEddingPerson} />
        </div>
    )
}

export default WillBirthday;