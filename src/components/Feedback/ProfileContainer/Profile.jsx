import React from 'react';
import style from './Profile.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
 
let Profile = (props) => {
    if( !props.profile ){
        return <Preloader />
    }
    return(
        <div className = {style.wrapper}>
            <div className = {style.profileHeader}>
                <div>
                    <NavLink to = {'/talk_with_us'}>Назад</NavLink>
                </div>
                <div>
                    <img src={ props.profile.photos.large } alt="img"/>
                </div>
                <div>
                    <span>Имя </span>
                    <span>Должность </span>
                    <span>Отдел </span>
                </div>
                <div className = {style.loginBlock}>
                    <span>
                        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
                    </span>
                </div>
            </div>
            <div>
                место для комментов
            </div>

            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div><button>Отправить</button></div>
        </div>
    )
}

export default Profile;