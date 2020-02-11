import React from 'react';
import style from './OfficeMap.module.css';
import CupsCoffe from './InfoBlock/CupsCoffe/CupsCoffe';
import Clients from './InfoBlock/Clients/Clients';
import Headline from './InfoBlock/Headline/Headline';
import Scheme from './InfoBlock/Scheme/Scheme';

const OfficeMap = () => {
    return (
        <div className = {style.OfficeMapWrapper} id={"map"}>
            <div className = {style.headlineWrapper}>
                <div className={style.statContainer}>
                    <CupsCoffe />
                    <Clients />
                </div>
                <Headline />
            </div>
            <Scheme />
        </div>
    )
}

export default OfficeMap;