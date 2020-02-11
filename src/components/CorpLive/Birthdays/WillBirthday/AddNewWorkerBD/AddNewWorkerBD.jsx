import React from 'react';
import style from './AddNewWorkerBD.module.css';
import { connect } from 'react-redux';
import { saveNewPersonBD, setGreetingPhotos, findEddingPerson } from '../../../../../redux/birthdayReduser';
import { getPersonBirthday } from '../../../../../redux/selectors/selectors';
import pencil from '../../../../../assets/images/pencil.png';
import rubber from '../../../../../assets/images/brush.png';
import find from '../../../../../assets/images/lens.png';
import trash from '../../../../../assets/images/trash.png';


class AddNewWorkerBD extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            name: '',
            secondName: '',
            fullBirthDate: '',
            depart: '',
            city: '',
            img: '',
            created: Date.now,
            editMode: false
        }
    };

    setHandleChange = (e, name) => {
        const { files, value } = e.target;
        for(let i = 0; i < Object.keys(this.state).length; i++) {
            if(name == Object.keys(this.state)[i]){
                this.setState({
                    [Object.keys(this.state)[i]]: name == "img" ? files[0] : value
                });
            };
        };
    };

    handleChange = (e) => {
        const { name } = e.target;
        this.setHandleChange(e, name);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.saveNewPersonBD(this.state).then(() => {
        //     this.props.setGreetingPhotos()
        // })

        console.log(this.state);
        
        this.setState({
            lastName: '',
            name: '',
            secondName: '',
            fullBirthDate: '',
            depart: '',
            city: '',
            img: '',
            imgBig: ''
        });
    };

    handleFind = (e) => {
        e.preventDefault();
        // this.props.findEddingPerson(this.state);
        console.log(this.state);
    }

    clearForm = () => {
        this.setState({
            lastName: '',
            name: '',
            secondName: '',
            fullBirthDate: '',
            depart: '',
            city: '',
            img: '',
            imgBig: ''
        });
    };

    editPersonData = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        
    };

    render() {
        let { editMode } = this.state;
        return (
            <div className={style.container}>
                {editMode ?
                    <form onSubmit={this.handleFind} className={style.formContainer}>     
                        <div>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Фамилия *" />
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Имя *" />
                            <input type="text" name="secondName" value={this.state.secondName} onChange={this.handleChange} placeholder="Отчество *" />
                            <button type="submit">Найти</button>
                        </div>

                        <div className={style.editButtons}>
                            <div className={style.buttonsBlock}>
                                <span onClick={this.clearForm}>
                                    <img src={rubber} alt="Clear" />
                                </span>
                                <span onClick={this.editPersonData}>
                                    <img src={pencil} alt="Edit"/>
                                </span>
                                <img src={trash} alt="Delete"/>
                            </div>
                        </div>
                    </form>
                    : <form onSubmit={this.handleSubmit} className={style.formContainer}>
                        <div>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Фамилия *" />
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Имя *" />
                            <input type="text" name="secondName" value={this.state.secondName} onChange={this.handleChange} placeholder="Отчество *" />
                            <input type="text" name="fullBirthDate" value={this.state.fullBirthDate} onChange={this.handleChange} placeholder="Полная дата *" />
                            <input type="text" name="depart" value={this.state.depart} onChange={this.handleChange} placeholder="Отдел *" />
                            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="Город" />
                            <input type="file" name="img" accept="image/*" onChange={this.handleChange} />
                            <button type="submit">Добавить</button>
                        </div>
                    
                        <div className={style.editButtons}>
                            <div className={style.buttonsBlock}>
                                <span onClick={this.clearForm}>
                                    <img src={rubber} alt="Clear" />
                                </span>
                                <span onClick={this.editPersonData}>
                                    <img src={pencil} alt="Edit"/>
                                </span>
                            </div>
                        </div>
                    </form>
                }
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    personBirthday: getPersonBirthday(state)
})

export default connect(mapStateToProps, {
    saveNewPersonBD,
    setGreetingPhotos,
    findEddingPerson
})(AddNewWorkerBD);