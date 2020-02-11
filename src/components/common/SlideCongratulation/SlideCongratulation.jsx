import React, { useState } from 'react';
import style from'./SlideCongratulation.module.css';
import FsLightbox from 'fslightbox-react';
import slide1 from '../../../img/ForCongratulation/slide1.jpg';
import slide2 from '../../../img/ForCongratulation/slide2.jpg';
import slide3 from '../../../img/ForCongratulation/slide3.jpg';


function SlidCongrat() {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <span className={style.congratulationCover}>
                <img src={slide1} alt="slide1" onClick={() => setToggler(!toggler)} />
            </span>
            <span className={style.slideDescr}>
                Поздравление
            </span>
            <FsLightbox
                toggler={toggler}
                sources={[
                    slide1,
                    slide2,
                    slide3
                ]}
            />
        </>
    );
}

export default SlidCongrat;