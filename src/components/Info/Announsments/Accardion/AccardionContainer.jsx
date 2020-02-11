import React from 'react';
import style from './AccardionContainer.module.css';
import Accardion from './Accardion';
import {connect} from 'react-redux';
import {setAnnounsment} from '../../../../redux/infoReduser';
import { compose } from 'redux';

class AccardionContainer extends React.Component{
    state = {
        isFetching: false,
        announsments: this.props.announsments
    }

    componentDidMount() {
        // this.props.setAnnounsment();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.announsments !== this.props.announsments) {
            this.setState({
                announsments: this.props.announsments
            });
        }
    }
    

    render() {
        return (
            <div className={style.forMS}>
                <Accardion {...this.state} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        announsments: state.infoPage.announsments
    }
}

export default compose(
    connect(mapStateToProps, {
    setAnnounsment})
)(AccardionContainer);
