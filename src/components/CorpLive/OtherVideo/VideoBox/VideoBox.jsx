import React, { useState } from 'react';
import style from './VideoBox.module.css';

const VideoBox = React.memo((props) => {
    return (
        <div className={style.videoPlayerBox}>
            {/* {props.otherVideo && 
                props.otherVideo.map(v => {
                    // debugger
                    return <div>
                        <Player
                            playsInline
                            poster={v.cover}
                            src={v.video} 
                        />

                        <span className={style.videoDescr}>
                            {v.descr}
                        </span> */}



                        <div>
                            <iframe width="340" height="215" src="https://www.youtube.com/embed/7a0hbT0QtSw" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>

                        <div>
                            <iframe width="340" height="215" src="https://www.youtube.com/embed/bebuiaSKtU4" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>

                        <div>
                            <iframe width="340" height="215" src="https://www.youtube.com/embed/Wl2mrlhE5Ww" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    {/* </div>
                })
            } */}
        </div>
    )
})

export default VideoBox;