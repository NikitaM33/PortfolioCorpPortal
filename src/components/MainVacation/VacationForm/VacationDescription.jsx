import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

const VacationDescription = (props) => {
    if( !props.descr ){
        return <Preloader />
    }
    // debugger
    return (
        <div>
            <div>
                <h3>{props.descr.department}</h3> {/* Название отдела */}
                <h4>{props.descr.vacation}</h4> {/* Название вакансии */}
                <h5>{props.descr.salary}</h5> {/* ЗП */}
                <br />
                <p>{props.descr.experience}</p>
                <div>
                    <h6>Требования:</h6>
                    <ul>
                        <li>{props.descr.fullDescr.duties.a}</li>
                        <li>{props.descr.fullDescr.duties.b}</li>
                        <li>{props.descr.fullDescr.duties.c}</li>
                        <li>{props.descr.fullDescr.duties.d}</li>
                        <li>{props.descr.fullDescr.duties.e}</li>
                    </ul>

                    <h6>Обязанности:</h6>
                    <ul>
                        <li>{props.descr.fullDescr.requirements.a}</li>
                        <li>{props.descr.fullDescr.requirements.b}</li>
                        <li>{props.descr.fullDescr.requirements.c}</li>
                        <li>{props.descr.fullDescr.requirements.d}</li>
                        <li>{props.descr.fullDescr.requirements.e}</li>
                    </ul>

                    <h6>Условия:</h6>
                    <ul>
                        <li>{props.descr.fullDescr.conditions.a}</li>
                        <li>{props.descr.fullDescr.conditions.b}</li>
                        <li>{props.descr.fullDescr.conditions.c}</li>
                        <li>{props.descr.fullDescr.conditions.d}</li>
                        <li>{props.descr.fullDescr.conditions.e}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VacationDescription;