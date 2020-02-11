import React, {Component} from 'react';
import './Header.css';
// import {NavLink} from 'react-router-dom';
import Nav from './Navigation/Nav';
import customLogo from '../../img/myLogo.png';
import { HashLink as NavLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { getPageCounter } from '../../redux/visitCounterReduser';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrolled: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 200;
            const onTop = window.scrollY < 4;
            if(isTop !== true){
                this.setState({scrolled: true});
            } else if( onTop !== false ) {
                this.setState({scrolled: false});
            }
        });

        this.props.getPageCounter();
    };

    // componentWillUnmount(){
    //     window.removeEventListener('scroll')
    // }

    render(){
        // debugger

        return(
            <header className={this.state.scrolled ? 'navTop scrolled' : 'navTop'}>
                {/* Ветка с украшениями в углу экрана */}
                {/* <div className={"vetka"}></div> */}
                <NavLink smooth to='/main/#top' className={this.state.scrolled ? 'logoScrolled' : 'logo'}>
                    <img src={customLogo} alt="Logo img"/>
                </NavLink>
                {/* <div id="snow"> */}
                    <Nav {...this.props} />
                    {/* <Nav /> */}
                {/* </div> */}
            </header>
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
})(Header);

// export default Header;