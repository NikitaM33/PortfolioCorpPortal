import SecondPost from './SecondPost';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        state: state.mainPage
    }
}

const SecondPostContainer = connect(mapStateToProps)(SecondPost);

export default SecondPostContainer;