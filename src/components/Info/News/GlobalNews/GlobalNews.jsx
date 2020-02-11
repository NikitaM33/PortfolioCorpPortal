import React from 'react';
import style from './GlobalNews.module.css';
import GlobalNewsItemContainer from './GlobalNewsItem/GlobalNewsItemContainer';
import newsPaper from '../../../../img/newspaper.png';
import { getNews, getImgInput } from '../../../../redux/selectors/selectors';
import { connect } from 'react-redux';
import { doSending } from '../../../../redux/newsReduser';

class GlobalNews extends React.Component {
    state = {
        testText: ''
    }

    change = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    sendEmail = (e) => {
        e.preventDefault();
        console.log('The distribution was carried out!');
        // this.props.doSending(this.state);
    }

    // createNewNews = (formValue) => {
    //     // props.createNews(formValue);
    //     // props.updateNewsList();
    //     console.log(formValue);
    // }

    render() {
        const { testText } = this.state;

        return (
            <div className={style.GlobalNewsWrapper}>
                <div className={style.headerNews}>
                    <h4>Новости</h4>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad.</h2>
                </div>
                <div className={style.newsPaper}>
                    <img src={newsPaper} className={style.newsPaperImg} />
                </div>

                
                <div className={style.gNewsItem}>

                    <div className={style.mailBtn}>
                        <form>
                            <div>
                                <label><h5>Оповестить всех по почте о свежей новости?</h5></label>
                            </div>
                            <div>
                                <textarea name="testText" value={testText} onChange={this.change} className={style.testText} placeholder="О чем оповестить?" />
                            </div>
                            {!this.state.testText 
                                ? <div className={style.sendBtnContainer}>
                                    <button onClick={this.sendEmail} disabled>Оповестить</button>
                                </div> 
                                : <div className={style.sendBtnContainer}>
                                    <button onClick={this.sendEmail}>Оповестить</button>
                                </div>
                            }
                            
                        </form>
                    </div>
                    <GlobalNewsItemContainer news={this.props.news} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: getNews(state),
    imgInput: getImgInput(state)
});
 
export default connect(mapStateToProps, {
    doSending
})(GlobalNews);