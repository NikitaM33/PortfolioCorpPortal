import React from 'react';
import UserAnnouns from './UserAnnouns';
import {connect} from 'react-redux';

class UserAnnounsContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <UserAnnouns {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        userUnnounsments: state.infoPage.userUnnounsments
    }
}

export default connect(mapStateToProps, {})(UserAnnounsContainer);