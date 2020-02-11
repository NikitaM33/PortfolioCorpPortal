import React from 'react';
import style from './LocalNewsBox.module.css';
import LocalNewsBox from './LocalNewsBox';
import {connect} from 'react-redux';

// const LocalNewsBox = (props) => {

//     let localNews = props.state.newsPage.corpNews.map( (cn) =>  <LocalNews headline = {cn.headline} article = {cn.article} />);

//     return (
//         <div className={style.localNewsBoxWrapper}>
//            {localNews}
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    return{
        state: state.newsPage
    }
}

const LocalNewsBoxContainer = connect(mapStateToProps)(LocalNewsBox);

export default LocalNewsBoxContainer;