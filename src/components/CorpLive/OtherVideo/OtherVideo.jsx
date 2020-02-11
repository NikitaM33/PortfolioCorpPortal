import React from 'react';
import style from './OtherVideo.module.css';
import VideoBox from './VideoBox/VideoBox';


const OtherVideo = (props) => {
    return (
        <div className={style.container}>
            <div className={style.videoBox}>
                <VideoBox otherVideo={props.otherVideo} />
            </div>
        </div>
    )
}

export default OtherVideo;