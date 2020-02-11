import React from 'react';
import style from './News.module.css';
import GlobalNews from './GlobalNews/GlobalNews';
import { connect } from 'react-redux';
import { createNews, updateNewsList, doSending } from '../../../redux/newsReduser';

class News extends React.Component {
    render() {
        return (
            <div className={style.newsWrapper} id={"news"}>
                <GlobalNews {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.newsPage.news,
    imgInput: state.newsPage.imgInput
})

export default connect(mapStateToProps, {
    createNews,
    updateNewsList,
    doSending
})(News);