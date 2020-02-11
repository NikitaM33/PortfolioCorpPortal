import React from 'react';
import style from './Mission.module.css';
import MissionByIvanov from './MissionByIvanov/MissionByIvanov';
import DescrMission1 from './DescrMission1/DescrMission1';
import DescrMission2 from './DescrMission2/DescrMission2';
import DescrMission3 from './DescrMission3/DescrMission3';
import DescrMission4 from './DescrMission4/DescrMission4';
import DescrMission5 from './DescrMission5/DescrMission5';

const Mission = () => {
    return(
        <div className={style.missionBlock} id={"mission"}>
            <MissionByIvanov />
            <DescrMission1 /> 
            <DescrMission2 />
            <DescrMission3 />
            <DescrMission4 />
            <DescrMission5 />
        </div>
    )
}

export default Mission;