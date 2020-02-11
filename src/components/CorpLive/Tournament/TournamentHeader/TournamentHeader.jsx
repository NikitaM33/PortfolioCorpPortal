import React from 'react';
import style from './TournamentHeader.module.css';


const TournamentHeader = (props) => {
    return (
        <div className={style.tournamentHeader}>
            <div>
                <h4>В течение месяца проводится</h4>
                <h1>Турнир</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti? <br />Ratione ex vel quisquam amet possimus architecto perspiciatis provident commodi.
                </p>
            </div>

            <div className={style.headerImg}></div>
        </div>
    )
}

export default TournamentHeader;