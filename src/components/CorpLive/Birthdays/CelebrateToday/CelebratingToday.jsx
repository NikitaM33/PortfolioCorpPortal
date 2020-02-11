import React from 'react';
import style from './CelebratingToday.module.css';

const CelebratingToday = (props) => {
    let todaySelebrateDay = new Date().getDate();
    let todaySelebrateMonth = new Date().getMonth() + 1;

    let monthAndDay = props.birthdayPhotosList.filter( item => item.dayOfBirthday === todaySelebrateDay && item.monthOfBirthday === todaySelebrateMonth );

    return (
        <div>
            <div className={style.congatulationTextHeader}>
                <h3>
                    Сегодня поздравляем:
                </h3>
            </div>
            <div className={style.container}>

                    {monthAndDay != 0 ? monthAndDay.map(ct => {
                        return (
                            <div key={ct.id} className={style.wrapper}>
                                <div className={style.imgBox}><img src={ct.img} alt="Image"/></div>
                                <div className={style.textBox}>
                                    <h3>{ct.lastName} {ct.name} {ct.secondName}</h3>
                                    <h5> <span>{ct.depart}</span></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt accusamus eum cupiditate aspernatur inventore, molestias veritatis quidem obcaecati unde ad culpa quibusdam numquam! Cum illum numquam neque deleniti voluptatum animi impedit modi saepe voluptas quisquam laboriosam expedita!</p>
                                </div>
                            </div>
                        )
                    })
                    : <div className={style.ifNoBirthDay}><h3>Сегодня ни кто не отмечает свой День рождения</h3></div>
                }
            </div>
        </div>
    )
}

export default CelebratingToday;