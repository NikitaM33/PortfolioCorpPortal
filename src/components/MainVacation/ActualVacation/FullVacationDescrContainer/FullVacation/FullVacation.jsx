import React from 'react';
import style from '../FullVacationDescrContainer.module.css';
import { HashLink as NavLink } from 'react-router-hash-link';
import Preloader from '../../../../common/Preloader/Preloader';

const FullVacation = (props) => {
    if(!props.vacationDescription) {
        return <Preloader />
    }
    return (
        <div>
            <div className={style.edging}>
                <div className={style.nameAndSalary}>
                    <span>{props.vacationDescription.nameOfVacation}</span><br />
                    <span>{props.vacationDescription.department}</span>
                    <hr />
                </div>
                <div className={style.vacationDescr}>
                    <div>
                        <label>Обязанности</label><br />
                            {props.vacationDescription.duties.map(d => <div>
                                - {d}
                            </div>)}
                    </div><br />
                    
                    <div>
                        <label>Требования к кандидату:</label><br />
                            {props.vacationDescription.requirements.map(r => <div>
                                - {r}
                            </div>)}
                    </div><br />

                    <div>
                        <label>Условия</label><br />
                            {props.vacationDescription.conditions.map(c => <div>
                                - {c}
                            </div>)}
                    </div><br />

                    <div className={style.additionally}>
                        <span>
                            {props.vacationDescription.additionallyRequirments}
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.backBtn}>
                <NavLink to="/jobs">Назад</NavLink>
            </div>
        </div>
    )
}

export default FullVacation;