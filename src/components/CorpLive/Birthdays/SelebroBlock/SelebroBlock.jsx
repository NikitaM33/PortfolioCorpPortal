import React from 'react';
import style from './SelebroBlock.module.css';


const SelebroBlock = (props) => {
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.darkBox}>
                    <h2>Lorem</h2>
                    <h2><span>100500</span> ipsum dolor sit <br /></h2>
                    <h3>amet consectetur adipisicing elit.</h3>
                </div>

                <div className={style.darkBox2}>
                    <h2><span>100500</span> <br />Lorem, ipsum</h2>
                    <h3>dolor sit amet consectetur adipisicing elit.</h3>
                </div>

                <div className={style.valuminousText}>
                    Lorem ipsum <span>dolor sit </span> amet consectetur adipisicing<span> elit. </span> Fugiat hic ipsum at odio <span>perspiciatis quis.</span>
                </div>
            </div>
        </div>
    )
}

export default SelebroBlock;