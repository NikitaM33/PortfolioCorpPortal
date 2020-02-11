import React from 'react';
import style from './Foto.module.css';

const Foto = (props) => {

    return (
        <div className = {style.imgElement}>
            <img src="https://i.pinimg.com/originals/31/46/2d/31462dd2dace33ac03e1e2dfc0257784.jpg" alt="Foto"/>
        </div>
    )
}

export default Foto;