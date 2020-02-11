import React, { Component, Fragment } from 'react';
import style from './AddAnnounsment.module.css';
import Add from './Add';

// class AddAnnounsment extends Component {
//     state = {
//         inputText: '',
//         textareaText: '',
//         showData: {
//             name: '',
//             text: ''
//         }
//     }

//     handleInputChange = ({ target: {value} }) => {
//         this.setState({
//             inputText: value
//         })
//     };

//     handleTextareaChange = ({ target: {value} }) => {
//         this.setState({
//             textareaText: value
//         })
//     };

//     handleShow = (e) => {
//         e.preventDefault();
//         const { inputText, textareaText } = this.state;
//         this.setState({
//             inputText: '',
//             textareaText: '',
//             showData: {
//                 name: inputText,
//                 text: textareaText
//             }
//         })
//     }

//     render() {
//         const { inputText, textareaText, showData } = this.state;
//         const { name, text } = showData;

//         return(
//             <Fragment>
//                 <form>
//                     <label>
//                         <h5>Название объявления</h5>
//                         <input type="text" name="name" value={inputText} onChange={this.handleInputChange} />
//                     </label><br />
//                     <label htmlFor="text"><h5>Текст объявления</h5></label><br />
//                     <textarea id="text" value={textareaText} onChange={this.handleTextareaChange} /><br />
//                     <button onClick={this.handleShow}>Опубликовать</button>
//                     <h2>{name}</h2>
//                     <h3>{text}</h3>
//                 </form>
//             </Fragment>
//         )
//     }
// }

const AddAnnounsment = (props) => {
    let addItem = props.newAnnounsment.map(n => <Add key={n.id} name={n.name} headline={n.headline} content={n.content} />);
    let newAddElement = React.createRef();

    let onHeaderChange = () => {
        let headText = newAddElement.current.value;
        props.updateHeadText(headText);
    }

    let onAddAnnounsment = () => {
        let text = newAddElement.current.value;
        props.updateNewAddText(text);
    }

    let onAddText = () => {
        props.addText();
    }

    return(
        <div className={style.wrapper}> 
            <div className={style.headNewAnnouns}>
                <h3>Новое объявление</h3>
                <h5>
                    <p>Здесь вы можете оставить свое объявление</p>
                </h5>
            </div>
            <form>
                {/* <div>
                    <h5>Название объявления</h5>
                    <input type="text" onChange={onAddAnnounsment} ref={newAddElement} value={props.announsmentName} placeholder={"Введите название"} />
                </div> */}
                <div>
                    <h5>Текст объявления</h5>
                    <textarea onChange={onAddAnnounsment} ref={newAddElement}
                       value={props.newAddText} cols="130" rows="6" placeholder={"Введите текст"}></textarea>
                </div>
                <div>
                    <button onClick={onAddText}>Опубликовать</button>
                </div>
            </form>
            <div>
                {addItem}
            </div>
        </div>
    )
}

export default AddAnnounsment;