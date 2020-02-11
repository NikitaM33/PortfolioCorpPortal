import React from 'react';
import style from './VideoBlock.module.css';
import VideoBlockTextHeader from './VideoBlockTextHeader/VideoBlockTextHeader';


const VideoBlock = (props) => {
    return (
        <div className={style.container}>
            <VideoBlockTextHeader corpLivePage={props.video} />
        </div>
    )
}

export default VideoBlock;