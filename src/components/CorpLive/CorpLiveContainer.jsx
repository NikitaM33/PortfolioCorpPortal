import React from 'react';
import style from './CorpLive.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getSlider, getVideoForCorpLivePage, getOtherVideo } from '../../redux/corpLiveReduser';
import { getSliderImages, getVideo, takeOtherVideo } from '../../redux/selectors/selectors';
import CorpLiveHeader from './CorpLiveHeader/CorpLiveHeader';
import VideoBlock from './VideoBlock/VideoBlock';
import OtherVideo from './OtherVideo/OtherVideo';

class CorpLiveContainer extends React.Component{

    componentDidMount() {
        // this.props.getSlider();
        // this.props.getVideoForCorpLivePage();
        // this.props.getOtherVideo();
    }

    render() {

        return(
            <div className={style.wrapper} id={"top"}>
                <CorpLiveHeader {...this.props} />
                <VideoBlock {...this.props} />
                <OtherVideo {...this.props} />
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        sliderImages: getSliderImages(state),
        video: getVideo(state),
        otherVideo: takeOtherVideo(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        // setCompetitionImg,
        // updateCompetitionLikes,
        // toggleDisabled,
        // setNewLikesValue,
        // updateCompetitionLogoLikes,
        // setNewLogoLikes,
        getSlider,
        getVideoForCorpLivePage,
        getOtherVideo
    })
)(CorpLiveContainer);