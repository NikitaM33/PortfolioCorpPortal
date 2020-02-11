import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/Info/News/News';
import AnnounsmentsPage from './components/Info/Announsments/AnnounsmentsPage/AnnounsmentsPage';
import CorpLiveContainer from './components/CorpLive/CorpLiveContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import NewsPageContainer from './components/Info/News/GlobalNews/GlobalNewsItem/NewsItem/NewsPageContainer';
import BirthdaysContainer from './components/CorpLive/Birthdays/BirthdaysContainer';
import Tournament from './components/CorpLive/Tournament/TournamentContainer';
import FullVacationDescrContainer from './components/MainVacation/ActualVacation/FullVacationDescrContainer/FullVacationDescrContainer';
import VisitorsMenuBtnCounter from './components/common/visitorsCounter/VisitorsMenuBtnCounter/VisitorsMenuBtnCounter';
import { getVideoGreeting } from './redux/mainReduser';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';

const Main = React.lazy(() => import('./components/Main/Main'));
const Info = React.lazy(() => import('./components/Info/Info'));
const MainVacationContainer = React.lazy(() => import('./components/MainVacation/MainVacationContainer'));

library.add(faStroopwafel)

class App extends React.PureComponent {
  componentDidMount() {
    this.props.getVideoGreeting();
  }

  render() {
    if(!this.props) {
      return <Preloader />
    }
    return(
      <BrowserRouter>
        <div className="appWrapper">
          <div className="appWrapperContent">
            <Header />
              <Route exact path="/" render={() => <Redirect to="/main/#top" />} />
              <Route path='/visitorsCounter' render={() => <VisitorsMenuBtnCounter />} />

              <Route path = '/main' render = { () => {
                return (
                  <Suspense fallback={<div className="waiting">Загрузка...</div>}>
                    <Main {...this.props.videoGreeting} />
                  </Suspense>
                )
              } } />
                
              <Route path = '/information' render = { () => {
                return (
                  <Suspense fallback={<div className="waiting">Загрузка...</div>}>
                    <Info />
                  </Suspense>
                )
              } } />
                <Route path = '/jobs' render = { () => {
                  return (
                    <Suspense fallback={<div className="waiting">Загрузка...</div>}>
                      <MainVacationContainer />
                    </Suspense>
                  )
                } } />
                  <Route path = '/vacationDescr/:vacationDescrId?' render={ () => <FullVacationDescrContainer /> } />
                <Route path = '/news' render = { () => <News />} />
                  <Route path = '/newsPaper/:newsId?' render = { () => <NewsPageContainer /> } />
                <Route path = '/announcement' render = { () => <AnnounsmentsPage /> } />

              <Route path = '/corp_live' render = { () => <CorpLiveContainer /> } />
                <Route path='/birthdays' render={ () => <BirthdaysContainer /> } />
                <Route path='/tournament' render={ () => <Tournament /> } />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      videoGreeting: state.mainPage.videoGreeting
  }
}

export default connect(mapStateToProps, {
  getVideoGreeting
})(App);
