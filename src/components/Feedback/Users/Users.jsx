import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../../assets/images/dedsec.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../../api/api';
// import Communications from './Communications/Communications';
// import PersonName from './PersonName/PersonName';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for( let i = 1; i <= pagesCount; i++ ){
        pages.push(i);
    }
    
    return (
        <div className={style.wrapper}>
            <div>
                {pages.map(p => {
                    return <span id={p.id} className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => { props.onPageChange(p) }}>{p}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to = { '/profile/' + u.id }>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => { 

                                    usersAPI.unfollow(u.id).then(data => {
                                        if ( data.resultCode == 0 ) {
                                            props.unfollow(u.id);
                                        }
                                    })
                                    
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "b2de6c08-33b5-4aa7-b1b9-f605b1978dd4" 
                                    //     }
                                    // })
                                    // .then(response => {
                                    //     if (response.data.resultCode == 0) {
                                    //         props.unfollow(u.id);
                                    //     }
                                    // });
                                }}>Unfollow</button>
                                : <button onClick={() => { 

                                    usersAPI.follow(u.id).then(data => {
                                        if ( data.resultCode == 0 ) {
                                            props.follow(u.id);
                                        }
                                    });

                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "b2de6c08-33b5-4aa7-b1b9-f605b1978dd4"
                                    //     }
                                    // })
                                    // .then(response => {
                                    //     if ( response.data.resultCode == 0) {
                                    //         props.follow(u.id);
                                    //     }
                                    // });
                                }}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;