import React from 'react';
import style from './LikesCounter.module.css';
import lightLike from '../../../assets/images/likeHeart.svg';
import blackLike from '../../../assets/images/likeHeartBlack.svg';

class LikesCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.dataState._id,
            likeId: this.props.dataState._id,
            likes: false,
            totalLikes: this.props.totalLikes,
            toggleDisabled: false,
            timeStamp: Date.now()
        };
    }

    increaseCount = () => {
        let competId = this.state._id;
        let jsonState = this.state;


        let timeStamp = localStorage.getItem('timeStamp');
        let storageLike = localStorage.getItem('likeId');
        let likeIdArr = [];

        if(timeStamp) {
            // добавляется в массив новые id лайков
            likeIdArr = JSON.parse(localStorage.getItem('idArr')); // преобразует JSON в объект
            likeIdArr.push(this.state.likeId);
            localStorage.setItem('idArr', JSON.stringify(likeIdArr));
            localStorage.setItem('likeId', JSON.stringify(this.state.likeId)); // преобразует объект в JSON
        } else {
            // создается массив если в localStorage ничего нет
            likeIdArr = [];
            likeIdArr.push(this.state.likeId);
            localStorage.setItem('idArr', JSON.stringify(likeIdArr));
            localStorage.setItem('timeStamp', Date.now());
            localStorage.setItem('likeId', JSON.stringify(this.state.likeId));
        }

        

        if(this.state.likes <= 999) {
            this.setState({
                likes: true,
                totalLikes: ++this.state.totalLikes,
                toggleDisabled: true
            });
        };
        this.props.updateCompetitionLogoLikes(competId, jsonState);
        this.props.setNewLogoLikes();
    }

    componentDidMount(){
        let timeStamp = localStorage.getItem('timeStamp');
        let parseTimeStamp = JSON.parse(timeStamp);

        if(timeStamp) {
            if((parseTimeStamp + 86400000) < this.state.timeStamp) {
                this.setState({
                    likes: false,
                    toggleDisabled: false
                });
                localStorage.clear();
            } else {
                let parseIdArr = JSON.parse(localStorage.getItem('idArr'));
                for(let i = 0; i < parseIdArr.length; i++) {
                    if(this.state.likeId == parseIdArr[i]) {
                        this.setState({
                            likes: true,
                            toggleDisabled: true
                        })
                    }
                }
            }
        }
    }

    render() {
        const { likes, totalLikes, toggleDisabled } = this.state

        return (
            <div className={style.wrapper}>
                <div className={style.likeBox}>
                    {likes ? <img src={blackLike} alt="Dislike" className={style.dislike} />
                    : <img src={lightLike} alt="Like" className={style.like} />}

                    
                    { toggleDisabled
                        ? <button className={style.likedBtn} disabled={toggleDisabled} >
                                Liked {totalLikes}
                            </button>
                        
                        : <button onClick={this.increaseCount} className={style.likeBtn} disabled={toggleDisabled} >
                                Like {totalLikes}
                            </button>
                    }
                </div>
            </div>
        )
    }
}

export default LikesCounter;