import React from 'react';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLength: this.props.arrLength,
            currentImage: this.props.currentImg,
            cycleMode: false
        }
    }

    componentWillMount(){
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount(){
        document.body.removeChild(this.root);
        document.body.style.overflow = "";
    }

    toggleImg = (e) => {
        if(e.currentTarget.dataset.direction === "next") {
            if(this.state.currentImage + 1 < this.state.arrLength.length) {
                this.setState({
                    currentImage: this.state.currentImage + 1
                })
            }
        } else {
            if(this.state.currentImage > 0) {
                this.setState({
                    currentImage: this.state.currentImage - 1
                })
            }
        }
    }

    render() {
        return (
            ReactDOM.createPortal(
            <div className={style.modal}>
                <button className={style.closeModal} onClick={this.props.onClose}>&times;</button>
                <div className={style.carouselWrapper}>
                    <button data-direction="prev" onClick={this.toggleImg} className={style.prevNextBtn}>❮</button>
                    
                    <div className={style.modalContent}>
                        {this.props.children[this.state.currentImage]}
                    </div>

                    <button data-direction="next" onClick={this.toggleImg} className={style.prevNextBtn}>❯</button>
                </div>
            </div>,
            this.root
            )
        )
    }
}