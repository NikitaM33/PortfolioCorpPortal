import React from 'react';
import style from './AccardionElems.module.css';

const AccardionElems = (props) => {
    return (
        <div className={style.accElem}>
            <div className={style.accItem}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{ props.breackingNews }</h5>
                        <p className="card-text">{props.newsText}</p>
                        <div className={style.phone}>
                            <h6 className="text-muted">{props.name}</h6>
                            <h6 className="text-muted"><bold>{props.phone}</bold></h6>
                        </div>
                        {props.img && 
                            <div className={style.announsImg}>
                                <img src={props.img} alt="img"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccardionElems;