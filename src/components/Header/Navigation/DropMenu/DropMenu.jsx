import React from 'react';
import style from './DropMenu.module.css';
// import {NavLink} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { getPageCounter, updateCounter } from '../../../../redux/visitCounterReduser';

class MenuDrop extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countId: this.props.countPage._id,
            dropMenu: false,
            mainPage: this.props.countPage.mainPage,
            infoPage: this.props.countPage.infoPage,
            vacationPage: this.props.countPage.vacationPage,
            corpLifePage: this.props.countPage.corpLifePage,
            birthdayPage: this.props.countPage.birthdayPage,
            tournamentPage: this.props.countPage.tournamentPage,
            date: this.props.countPage.date
        }
    }

    componentDidMount(){
        // Чтобы меню реагировало на скролл
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 200;
            const onTop = window.scrollY < 4;
            if(isTop == false){
                this.setState({ dropMenu: true });
            } else if(onTop == true){
                this.setState({ dropMenu: false });
            }
        });

        if(this.state.date > (this.state.date + 86400000)) {
            this.setState({
                date: Date.now()
            });
        }
    };

    // componentWillUnmount(){
    //     // window.removeEventListener('scroll');  // Он нужен???? Он был закоменчен.
    // };

    onChangeMain = () => {
        // let date = Date.now();
        // if(this.state.date > (date + 86400000)) {
        //     // this.props.createNewCellInBd(this.state.date);
        // }

        this.setState({
            mainPage: ++this.state.mainPage
        });
        
        console.log(this.state);
        this.props.updateCounter(this.state.countId, this.state);
    }

    onChangeInfoPage = () => {
        // let date = Date.now();
        // if(this.state.date > (date + 86400000)) {
        //     // this.props.createNewCellInBd(this.state.date);
        // }

        this.setState({
            infoPage: ++this.state.infoPage
        });
        
        console.log(this.state);
        this.props.updateCounter(this.state.countId, this.state);
    }

    onChangeVacation = () => {
        // let date = Date.now();
        // if(this.state.date > (date + 86400000)) {
        //     // this.props.createNewCellInBd(this.state.date);
        // }

        this.setState({
            vacationPage: ++this.state.vacationPage
        });
        
        console.log(this.state);
        this.props.updateCounter(this.state.countId, this.state);
    }

    onChangeCorpLife = () => {
        // let date = Date.now();
        // if(this.state.date > (date + 86400000)) {
        //     // this.props.createNewCellInBd(this.state.date);
        // }

        this.setState({
            corpLifePage: ++this.state.corpLifePage
        });
        
        console.log(this.state);
        this.props.updateCounter(this.state.countId, this.state);
    }

    onChangeTournament = () => {
        // let date = Date.now();
        // if(this.state.date > (date + 86400000)) {
        //     // this.props.createNewCellInBd(this.state.date);
        // }

        this.setState({
            tournamentPage: ++this.state.tournamentPage
        });
        
        console.log(this.state);
        this.props.updateCounter(this.state.countId, this.state);
    }

    render() {
        // debugger
        return (
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <NavLink smooth to='/main/#top' activeClassName={style.active}>Главная</NavLink>
                    <ul className={this.state.dropMenu ? style.dropMenu : style.menuDrop}>
                        <li>
                            <NavLink smooth to="/main/#mission">О нас</NavLink>
                        </li>
                        <li>
                            <NavLink smooth to="/main/#whyFilbert">История</NavLink>
                        </li>
                        <li>
                            <NavLink smooth to="/main/#scheme">Карта</NavLink>
                        </li>
                        <li>
                            <NavLink smooth to="/main/#etiquette">Этикет</NavLink>
                        </li>
                        <li>
                            <NavLink smooth to="/main/#delivery">Развозка</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/structure'>Кодекс</NavLink>
                            <NavLink smooth to="/main">Кодекс</NavLink>
                        </li> */}
                    </ul>
                </li>
                <li className={style.menuItem}>
                    <NavLink smooth to='/information/#top' activeClassName={style.active}>Инфо центр</NavLink>
                    <ul className={this.state.dropMenu ?  style.dropMenu : style.menuDrop}>
                        <li>
                            {/* <NavLink to='/news'>Новости</NavLink> */}
                            <NavLink smooth to="/information/#news">Новости</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to='/announcement'>Объявления</NavLink> */}
                            <NavLink smooth to="/information/#announsments">Объявления</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to='/announcement'>Объявления</NavLink> */}
                            <NavLink smooth to="/information/#newWorker">Новые сотрудники</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to='/jobs'>Вакансии</NavLink> */}
                            <NavLink smooth to='/jobs/#top'>Вакансии</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/statement'>Шаблоны</NavLink>
                        </li> */}
                    </ul>
                </li>
                <li className={style.menuItem}>
                    <NavLink smooth to='/corp_live/#top' activeClassName={style.active}>Корпоративная жизнь</NavLink>
                    <ul className={this.state.dropMenu ?  style.dropMenu : style.menuDrop}>
                        {/* <li>
                            <NavLink smooth to='/foto_gallery'>Фото</NavLink>
                        </li> */}
                        <li>
                            <NavLink smooth to='/birthdays'>Дни рождения</NavLink>
                        </li>
                        <li>
                            <NavLink smooth to='/tournament/#top'>Турнир</NavLink>
                        </li>
                    </ul>
                </li>
                {/* <li className={style.menuItem}>
                    <NavLink smooth to='/jobs/#top' activeClassName={style.active}>Вакансии</NavLink> 
                </li> */}
                {/* <li className={style.menuItem}>
                    <NavLink smooth to='/educational_center/#top' activeClassName={style.active}>Учебный центр</NavLink>
                </li> */}
                {/* <li className={style.menuItem}>
                    <NavLink smooth to='/talk_with_us/#top' activeClassName={style.active}>Обратная связь</NavLink>
                </li> */}
            </ul>
        )
    }
}
// }

let mapStateToProps = (state) => {
    return {
        pageCounter: state.visitCounter.pageCounter
    }
}

export default connect(mapStateToProps, {
    // getPageCounter,
    updateCounter
})(MenuDrop);