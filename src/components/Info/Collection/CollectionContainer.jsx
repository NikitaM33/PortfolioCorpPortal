import React from 'react';
import style from './Collection.module.css';
import Collection from './Collection';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { getLeaders } from "../../../redux/infoReduser";

class CollectionContainer extends React.PureComponent {
    componentDidMount() {
        // this.props.getLeaders();
    }

    render() {
        return(
            <div className={style.wrapper}>
                <div className={style.collectTextWrapper}>
                    <FontAwesomeIcon icon={faUsers} className={style.iconStyle} />
                    <div className={style.text}>
                        <h1>Lorem ipsum <span>dolor sit </span>amet consectetur.</h1>
                    </div>
                </div>
                <Collection {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        pedestal: state.infoPage.pedestal
    }
}

export default connect(mapStateToProps, {
    getLeaders
})(CollectionContainer);