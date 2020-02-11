import React from 'react';
import style from './Nav.module.css';
import MenuDrop from './DropMenu/DropMenu';

const Nav = (props) => {
    // debugger
    return (
        <nav className={style.nav}>
            {props.pageCounter.map( pc => {
                return <MenuDrop key={pc.id} countPage={pc} />
            })}
        </nav>
    )
}

export default Nav;