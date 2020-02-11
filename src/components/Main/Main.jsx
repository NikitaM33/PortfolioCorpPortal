import React from 'react';
import style from './Main.module.css';
import WelcomeWord from './WelcomeWord/WelcomeWord';
import Carousel from './Carousel/Carousel';
import Mission from './HistoryBlock/Mission';
import WhyFilbert from './WhyFilbert/WhyFilbert';
import OfficeMap from './OfficeMap/OfficeMap';
import PartnersLine from './PartnersLine/PartnersLine';
import Etiquette from './Etiquette/Etiquette';
import Delivery from './Delivery/Delivery';
import FoodCort from './FoodCort/FoodCort';

class Main extends React.PureComponent {

    render() {
        return (
            <div>
                <div className={style.welcomeWrapper} id={"top"}>
                    <WelcomeWord {...this.props[0]} />
                    <Carousel />
                </div>
                <div>
                    <Mission />
                </div>
                <div>
                    <WhyFilbert />
                </div>
                <div className={style.prlx}>
                    <OfficeMap />
                </div>
                <div>
                    <PartnersLine />
                </div>
                <div>
                    <Etiquette />
                </div>
                <div>
                    <Delivery />
                </div>
                <div>
                    <FoodCort />
                </div>
            </div>
        )
    }
}

export default Main;