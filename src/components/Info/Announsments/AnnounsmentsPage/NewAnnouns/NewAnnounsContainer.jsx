import React from 'react';
import NewAnnouns from './NewAnnouns';
import {connect} from 'react-redux';

class NewAnnounsContainer extends React.Component {
    render() {
        return(
            <div>
                <NewAnnouns {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        newAnnounsment: state.AnnounsmentsPage.newAnnounsment
    }
}

export default connect(mapStateToProps)(NewAnnounsContainer);