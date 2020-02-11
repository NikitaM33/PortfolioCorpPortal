import FirstPost from './FirstPost';
import {connect} from 'react-redux';


let mapStatetoProps = (state) => {
    return{
        state: state.mainPage
    }
}

const FirstPostContainer = connect(mapStatetoProps)(FirstPost);

export default FirstPostContainer;