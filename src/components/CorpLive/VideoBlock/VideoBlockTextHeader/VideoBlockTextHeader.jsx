import React from 'react';
import style from '../VideoBlock.module.css';
import SlidCongrat from '../../../common/SlideCongratulation/SlideCongratulation';

const VideoBlockTextHeader = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                <h4>Смотрите наши видео</h4>
                <h1>Новогодние подздравления</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vel pariatur velit quas recusandae ex atque quibusdam ullam nesciunt laborum!
                </p>
            </div>
            <div className={style.slideContainer}>
                <SlidCongrat />
            </div>
        </div>
    )
}

export default VideoBlockTextHeader;