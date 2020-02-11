import React, { Suspense } from 'react';
import * as axios from 'axios';
import { setNewsData } from '../../../../../../redux/newsReduser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const NewsItem = React.lazy(() => import('./NewsItem'));


class NewsPageContainer extends React.Component{
    
    componentDidMount() {
        let newsId = this.props.match.params.newsId;
        // axios.get(`/api/news/` + newsId)
        // .then(response => {
        //     // debugger
            this.props.setNewsData(newsId)
        // })
    }

    render() {
        return (
            <div>
                <Suspense fallback={<div style={{textAlign: 'center', marginTop: '7em', marginBottom: '2em'}}>Загрузка...</div>}>
                    <NewsItem {...this.props} />
                </Suspense>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        // newsPage: state.newsPage.news,
        newsDescr: state.newsPage.newsDescr
    }
}

let withUrlDataWallpaper = withRouter(NewsPageContainer);

export default connect(mapStateToProps, {setNewsData})(withUrlDataWallpaper);