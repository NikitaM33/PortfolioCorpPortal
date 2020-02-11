import React from 'react';
import style from './GlobalNewsItem.module.css';
import news from '../../../../../img/happyWorker.jpg';
import Preloader from '../../../../common/Preloader/Preloader';
import { HashLink as NavLink } from 'react-router-hash-link';

const GlobalNewsItem = (props) => {
    if(!props.news) {
        return <Preloader />
    }

    let truncate = (text) => {
        if(!text) {
            return 'There is no text'
        } else {
            let maxLength = 500;
            return (text.length > maxLength) ? 
            text.slice(0, maxLength - 3 ) + '...' : text;
        }
    }

    // debugger
    return (
        <div className={style.GlobalNewsItemWrapper}>
            {
                // Новости меньше месяца
                props.news.map( freshNews => {
                    // console.log(Date.now()) // для ручного выстановления timeStamp в бд
                    if(freshNews.timeStamp && freshNews.timeStamp < (Date.now() + 2592000000)) {
                        return <div className={style.globalItem} key={freshNews.id}>
                            <div>
                                <div>
                                    <NavLink to={'/newsPaper/' + freshNews._id + `/#top`} className={style.newsWrapper}>
                                        <figure className={style.newsBody}>
                                            <h1>{freshNews.newsHeader}</h1>
                                            <p>{truncate(freshNews.newsContent)}</p>
                                        </figure>
                                        <img src={freshNews.newsImg} alt="img"/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    }
                })
            }
            {
                // Новости старше месяца
                props.news.map( np => {
                    if(np.timeStamp && np.timeStamp > (Date.now() + 2592000000)) {
                        return <div className={style.globalItem} key={np.id}>
                                <div>
                                    <div>
                                        <NavLink to={'/newsPaper/' + np._id + `/#top`} className={style.newsWrapper}>
                                            <figure className={style.newsBody}>
                                                <h1>{np.newsHeader}</h1>
                                                <p>{truncate(np.newsContent)}</p>
                                            </figure>
                                            <img src={np.newsImg} alt="img"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        } else if(!np.timeStamp) {
                            return <div className={style.globalItem} key={np.id}>
                                <div>
                                    <div>
                                        <NavLink to={'/newsPaper/' + np._id + `/#top`} className={style.newsWrapper}>
                                            <figure className={style.newsBody}>
                                                <h1>{np.newsHeader}</h1>
                                                <p>{truncate(np.newsContent)}</p>
                                            </figure>
                                            <img src={np.newsImg} alt="img"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        }
                    }
                )
            }
            {/* <SpecialVideoMF /> */}
        </div>
    );
}

// const SpecialVideoMF = (props) => {

//     return (
//         <div className={style.globalItem}>
//             <div>
//                 <div>
//                     <NavLink to={'/specialVideo'} className={style.newsWrapper}>
//                         <figure className={style.newsBody}>
//                             <h1>Видео с соревнований в Луге 6.10.2019</h1>
//                             <p>Спонсорство соревнований в Луге 2019</p>
//                         </figure>
//                         <img src={imgForVideo} alt="img" />
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default GlobalNewsItem;