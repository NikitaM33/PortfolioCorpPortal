import React from 'react';
import style from './VisitorsMenuBtnCounter.module.css';
import { connect } from 'react-redux';
import { getPageCounter } from '../../../../redux/visitCounterReduser';

class VisitorsMenuBtnCounter extends React.PureComponent {
    componentDidMount() {
        this.props.getPageCounter();
    }

    render() {
        return (
            <div className={style.wrapper}>
                <table className={style.menuBtnCount} border="1px" cellPadding="5px">
                    <tr>
                        <th>Главная</th>
                        <th>Инфо центр</th>
                        <th>Вакансии</th>
                        <th>Корп. жизнь</th>
                        <th>Дни рождения</th>
                        <th>Турнир</th>
                    </tr>
                    {this.props.pageCounter.map( pCount => {
                            return  <tr key={pCount.id}>
                                <td>{pCount.mainPage}</td>
                                <td>{pCount.infoPage}</td>
                                <td>{pCount.vacationPage}</td>
                                <td>{pCount.corpLifePage}</td>
                                <td>{pCount.birthdayPage}</td>
                                <td>{pCount.tournamentPage}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageCounter: state.visitCounter.pageCounter
    }
}

export default connect(mapStateToProps, {
    getPageCounter
})(VisitorsMenuBtnCounter);