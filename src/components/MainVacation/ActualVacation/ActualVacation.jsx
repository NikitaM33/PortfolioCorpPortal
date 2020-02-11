import React from 'react';
import style from './ActualVacation.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { HashLink as NavLink } from 'react-router-hash-link';

const ActualVacation = (props) => {
    if(!props.jobList) {
        return <Preloader />
    }

    let truncate = (text) => {
        if(!text) {
            return 'На данный момент у нас нет вакансий'
        } else {
            let maxLength = 368;
            return (text.length > maxLength) ? 
            text.slice(0, maxLength - 3 ) + '...' : text;
        }
    }

    return (
        <div className={style.container}>
            {props.jobList.map(jl => {
                return (
                    <div className={style.vacationEdging}>
                        <div className={style.nameAndSalary}>
                            <span>
                                <NavLink to={`/vacationDescr/${jl._id}/#top`}>
                                    <h4>
                                        {jl.nameOfVacation}
                                    </h4>
                                </NavLink>
                            </span>
                        </div>
                        <div className={style.vacationDescr}>
                            {jl.duties.map(d => <div>
                                    - {truncate(d)}
                                </div>)}
                        </div>
                        <div className={style.vacationDate}>
                            <span>
                                {jl.vacationDate}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ActualVacation;