import React from 'react';
import style from './Vacation.module.css';
import VacationItem from './VacationItem/VacationItem';

const Vacation = (props) => {

    let vacationBox = props.infoPage.vacation.map( (box) => <VacationItem key={box.id} icon={box.icon} 
            department= { box.department } vacation = { box.vacation } decription = { box.decription } /> )

    return(
        <div className={style.vacationWrapper}>
            <div>
                <h4>Открытые вакансии</h4>
                <h2>We stand behind our <br />work in ways never <br />done before</h2>
            </div>
            {/* <div className={style.department}>
                { vacationBox }
            </div> */}
        </div>
    )
}

export default Vacation;