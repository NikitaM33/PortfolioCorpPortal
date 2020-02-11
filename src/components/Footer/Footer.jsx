import React from 'react';
import style from './Footer.module.css';
import SocialWeb from '../common/SocialeWeb/SocialeWeb';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.filbert}>
                <h5>ООО &laquo;Filbert&raquo;</h5>
                <SocialWeb />
            </div>
            <div className={style.rights}>
                <h6>Filbert 2020</h6>
            </div>
        </div>
    )
}

export default Footer;