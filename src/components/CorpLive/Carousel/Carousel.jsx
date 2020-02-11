import React from 'react';
import style from './Carousel.module.css';
// import { getSlider } from '../../../redux/corpLiveReduser';
// import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import img1 from '../../../img/ForCarousel/img1.jpg';
import img2 from '../../../img/ForCarousel/img2.jpg';
import img3 from '../../../img/ForCarousel/img3.jpg';

class Carousel extends React.Component {
    state = {
        sliderImages: [
            img1,
            img2,
            img3
        ],
        currentImage: 0,
        sycleMode: false
    }

    nextImage = (e) => {
        let newCurrentImage = this.state.currentImage

        if(e.currentTarget.dataset.direction === 'next') {
            if(newCurrentImage < this.state.sliderImages.length - 1) {
                newCurrentImage = this.state.currentImage + 1;
            }
        } else {
            if(newCurrentImage > 0) {
                newCurrentImage = this.state.currentImage - 1;
            }
        }

        this.setState({
            currentImage: newCurrentImage
        });
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.currentImage >= 2) {
                this.setState({
                    currentImage: 0
                });
            } else {
                this.setState({
                    currentImage: this.state.currentImage + 1
                });
            }
        }, 15000);
    }

    // componentDidMount() {
    //     this.props.getSlider();
    // }

    render() {
        return (
            <div className={style.container}>
                <div className={style.carouselWrapper}>
                    <div className={style.prevBtn}>
                        <span data-direction="prev" onClick={this.nextImage}>❮</span>
                    </div>

                    <TransitionGroup>
                        <div className={style.imagesSlider}>
                            <CSSTransition classNames="option">
                                <img src={this.state.sliderImages[this.state.currentImage]} alt="slider" />
                            </CSSTransition>
                        </div>
                    </TransitionGroup>
                    <div className={style.nextBtn}>
                        <span data-direction="next" onClick={this.nextImage}>❯</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;