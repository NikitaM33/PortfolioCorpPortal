import React from 'react';
import style from './WelcomeWord.module.css';
import WelcomeBtn from './WelcomeBtn/WelcomeBtn';
import SocialWeb from '../../common/SocialeWeb/SocialeWeb';
import '../../../../node_modules/video-react/dist/video-react.css'; // import css for video player
import { Player } from 'video-react';

class WelcomeWord extends React.PureComponent {

    render() {
        return (
            <div className={style.welcomeWord}>
                <h2>Уважаемый сотрудник!</h2>
                <h1>Нам приятно приветствовать Вас в штате Агентства взыскания Filbert.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas esse in, facilis cupiditate recusandae asperiores molestias sint iste quae facere corrupti saepe neque consectetur architecto obcaecati porro cum provident impedit sequi, a quia nostrum perspiciatis est. Minima dolor nostrum fuga!
                </p>

                <WelcomeBtn />

                {/* {this.props.videoGreeting 
                    ? <div className={style.videoGreeting}>
                        <Player
                            playsInline
                            poster={this.props.cover}
                            src={this.props.videoGreeting} />
                    </div>
                    : <div className={style.containerPreload}>
                        <Preloader />
                    </div>
                } */}


                <div className={style.maximumNoticeably}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque praesentium expedita quae aliquid consectetur quod laboriosam temporibus animi id vero, ab minus incidunt optio odit nobis quaerat magnam vitae aliquam!
                    </p>
                </div>

                <p className={style.pUnderBtn}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi voluptatum ut tempora hic magnam aut quod earum, eos voluptates facilis molestias laboriosam atque, fuga maxime nesciunt quos dolor. Aut.
                </p>
                <SocialWeb />
            </div>
        )
    }
}

export default WelcomeWord;