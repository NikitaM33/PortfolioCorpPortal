import React from 'react';
import style from './Accardion.module.css';
import AccardionElems from './AccardionElems/AccardionElems';

const Accardion = (props) => {
    let accardionElems = props.announsments.map( (elem) => <AccardionElems key={elem.id} 
                img = {elem.img} breackingNews = { elem.breackingNews } 
                newsText = { elem.newsText } name={elem.name} phone={elem.phone} /> );
    return (
        <div className={style.accardion}>
            { 
                props.announsments.length === 0 ? 
                <h1 className={style.noAnnouns}>Тут пока что нет объявлений</h1> 
                : accardionElems
            }
        </div>
    )
}

export default Accardion;