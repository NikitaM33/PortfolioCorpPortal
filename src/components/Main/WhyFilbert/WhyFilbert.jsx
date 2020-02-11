import React from 'react';
import style from './WhyFilbert.module.css';
import Square from './Square/Square';
import FirstPostContainer from './FirstPost/FirstPostContainer';
import SecondPostContiner from './SecondPost/SecondPostContainer';

const WhyFilbert = () => {
    return (
        <div className={style.whyFilbertWrapper} id={"whyFilbert"}>
            <Square />
            <FirstPostContainer /> 
            <SecondPostContiner />
        </div>
    )
}

export default WhyFilbert;