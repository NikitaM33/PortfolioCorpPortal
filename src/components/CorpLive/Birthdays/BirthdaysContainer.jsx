import React from 'react';
import style from './Birthdays.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import iceCream from '../../../img/iceCream.jpg';
import SelebroBlock from './SelebroBlock/SelebroBlock';
import { setGreetingPhotos, setTodayBirthday, findEddingPerson } from '../../../redux/birthdayReduser';
import WillBirthday from './WillBirthday/WillBirthday';
import { getBirthdayPhoto, getBirthdayToday } from '../../../redux/selectors/selectors';
import CelebratingToday from './CelebrateToday/CelebratingToday';


class BirthdaysContainer extends React.Component {
    componentDidMount() {
        // this.props.setGreetingPhotos();
        // this.props.setTodayBirthday();
    }

    render () {
        return (
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div>
                        <h3>Дни рождения</h3>
                        <h1>Поздравления коллег</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque assumenda illo nobis vitae voluptas quis accusantium expedita exercitationem distinctio.</p>
                    </div>
                    <div className={style.selebration}>
                        <img src={iceCream} alt="Какая-то картинка с праздником"/>
                    </div>
                </div>
                <div className={style.greetingBlock}>
                    <SelebroBlock {...this.props} />
                </div>
                <WillBirthday {...this.props} />
                <hr />
                <CelebratingToday {...this.props} />
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        birthdayPhotosList: getBirthdayPhoto(state),
        celebratingToday: getBirthdayToday(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        setGreetingPhotos,
        setTodayBirthday,
        findEddingPerson
    })
)(BirthdaysContainer);