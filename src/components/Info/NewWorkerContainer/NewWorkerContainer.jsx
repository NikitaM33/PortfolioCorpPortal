import React from 'react';
import style from './NewWorker.module.css';
import NewWorker from './NewWorker/NewWorker';
import { connect } from 'react-redux';
import { getNewWorker } from '../../../redux/infoReduser';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class NewWorkerContainer extends React.Component{

    componentDidMount() {
        // this.props.getNewWorker();
    }

    render() {
        return(
            <div className={style.wrapper} id={"newWorker"}>
                <div className={style.orangeSquare}>
                    <h1>Новые <br />сотрудники</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt accusamus in minima amet necessitatibus facere inventore libero voluptate nulla?</p>
                </div>
                <NewWorker {...this.props} />                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newWorkersList: state.infoPage.newWorkersList
    }
}

export default compose(
    connect(mapStateToProps, {getNewWorker}),
    withRouter
)(NewWorkerContainer);