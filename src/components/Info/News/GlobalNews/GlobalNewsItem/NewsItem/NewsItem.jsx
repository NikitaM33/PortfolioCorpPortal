import React from 'react';
import style from '../GlobalNewsItem.module.css';
import Preloader from '../../../../../common/Preloader/Preloader';
import { HashLink as NavLink } from 'react-router-hash-link';
import '../../../../../../../node_modules/video-react/dist/video-react.css'; // import css for video player
import { Player } from 'video-react';

const NewsItem = (props) => {
    if(!props.newsDescr) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.newspaperWrapper} id={"top"}>
                <NavLink to='/information/#news' className={style.backButton}>Назад</NavLink>
                <h1>{props.newsDescr.newsHeader}</h1>
                
                {props.newsDescr.newsModalImg 
                    ? <img src={props.newsDescr.newsModalImg} alt="img"/>
                    : props.newsDescr.newsVideo ? <Player
                        playsInline
                        poster={props.newsDescr.newsImg}
                        src={props.newsDescr.newsVideo} />
                        : "Нет изображения(("
                }
                {props.newsDescr.link 
                    ? <a href={props.newsDescr.LinkPath} target="_blank" className={style.link}>{props.newsDescr.nameLink}</a>
                    : null
                }
                <p>{props.newsDescr.newsContent}</p>
            </div>

        </div>
    )
}

export default NewsItem;