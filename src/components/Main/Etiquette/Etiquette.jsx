import React from 'react';
import style from './Etiquette.module.css';
import EtiquetteText from './EtiquetteTexts/EtiquetteText';
import DressCode from './DressCode/DressCode';
import Requirements from './Requirements/Requirements';
import Behavior from './Behavior/Behavior';

const Etiquette = (props) => {
    return (
        <div className = {style.etiquetteWrapper} id={"etiquette"}>
            <EtiquetteText />
            <div className={style.threeContainer}>
                <DressCode />
                <Requirements />
                <Behavior />
            </div>
        </div>
    )
}

export default Etiquette;