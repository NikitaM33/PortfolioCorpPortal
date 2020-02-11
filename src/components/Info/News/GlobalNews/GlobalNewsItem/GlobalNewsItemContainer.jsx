import React from 'react';
import GlobalNewsItem from './GlobalNewsItem';
import {connect} from 'react-redux';
import { getNews, getTest } from '../../../../../redux/newsReduser';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class GlobalNewsItemContainer extends React.Component {
    componentDidMount() {
        // this.props.getNews();
        // this.props.getTest();
    }

    render() {
        return(
            <div>
                <GlobalNewsItem {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage.news,
        test: state.newsPage.testImg
    }
}

export default compose(
    connect(mapStateToProps, {
        getNews,
        getTest
    }),
    withRouter
)(GlobalNewsItemContainer);