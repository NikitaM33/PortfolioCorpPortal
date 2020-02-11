import React from 'react';
import style from './TournamentTeams.module.css';
import dvviip from '../../../../img/dvviip.jpg';
import callCenter from '../../../../img/callCenter.png';

const TournamentTeams = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.dateMessage}><h4>Предварительный рейтинг</h4></div>
            <div className={style.dvvip}>
                <img src={dvviip} alt="olimp"/>
                <span>
                    Super Team Number 1
                </span>
            </div>
            <div className={style.callCeter}>
                <span>
                    Super Team Number 2
                </span>
                <img src={callCenter} alt="olimp"/>
            </div>
        </div>
    )
}

export default TournamentTeams;