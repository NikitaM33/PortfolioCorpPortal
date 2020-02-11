import React from 'react';
import style from './MissionByIvanov.module.css';

const MissionByIvanov = () => {
    return(
        <div className={style.missionWrapper}>
            <h1>Миссия компании <br /> и наши ценности</h1>
            <div className={style.highlight}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et vel molestias sit accusantium cumque voluptas deleniti laborum tempore quas assumenda repudiandae doloribus dolore, nam corrupti molestiae at soluta blanditiis.
              </p>
              <h2>
                L.Ipsums
              </h2>
            </div>
        </div>
    )
}

export default MissionByIvanov;