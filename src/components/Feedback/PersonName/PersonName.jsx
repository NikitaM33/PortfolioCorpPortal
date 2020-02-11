import React from 'react';
import style from './PersonName.module.css';

const PersonName = () => {
    return (
        <div className = {style.personNameWrapper}>
            <div className = {style.apponentName}>
                <h3>Василий Васильевич Василин</h3>
            </div>
        </div>
    )
}

export default PersonName;