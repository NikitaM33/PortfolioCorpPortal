import React from 'react';
import style from '../VideoBlock.module.css';
import '../../../../../node_modules/video-react/dist/video-react.css'; // import css for video player
import { Player } from 'video-react';

const ChosenVideo = (props) => {
    // debugger
    return (
        <div className={style.videoWrapper}>
            {props.corpLivePage.map(cpv => {
                return <Player
                    playsInline
                    poster={cpv.cover}
                    src={cpv.video} 
                />
            })}
        </div>
    )
}

export default ChosenVideo;