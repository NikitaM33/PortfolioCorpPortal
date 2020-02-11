import React from 'react';
import Vacation from './Vacation';
import {connect} from 'react-redux';

class VacationContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <Vacation {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        infoPage: state.infoPage
    }
}

export default connect(mapStateToProps, {

})(VacationContainer);